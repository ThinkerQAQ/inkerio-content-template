import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const templateRoot = fileURLToPath(new URL("../", import.meta.url));

function required(value, label) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(label + " must be a nonempty string");
  }
  return value.trim();
}

export function prepareSiteConfig(defaults, settings, repositorySlug = "") {
  if (!settings || typeof settings !== "object" || Array.isArray(settings)) {
    throw new Error("site.config.json must be a JSON object");
  }
  const title = required(settings.title, "title");
  const author = required(settings.author, "author");
  if (/^(YOUR_NAME|Example Author|Sample Author)$/i.test(author)) {
    throw new Error("Replace YOUR_NAME in site.config.json with your author name");
  }
  const description = required(settings.description, "description");
  const descriptionEn = required(settings.descriptionEn, "descriptionEn");
  const url = new URL(required(settings.url, "url"));
  if (url.protocol !== "https:" || url.username || url.password || url.port
      || url.pathname !== "/" || url.search || url.hash
      || /YOUR_USERNAME|example\.(com|invalid)|localhost/i.test(url.hostname)) {
    throw new Error("Set url to https://YOUR_USERNAME.github.io (replace YOUR_USERNAME), or your verified HTTPS custom domain");
  }
  let owner = "";
  let repo = "";
  if (repositorySlug) {
    const parts = repositorySlug.split("/");
    if (parts.length !== 2 || parts.some((part) => !/^[\w.-]+$/.test(part))) {
      throw new Error("Expected --repository OWNER/OWNER.github.io");
    }
    [owner, repo] = parts;
    if (repo.toLowerCase() !== (owner.toLowerCase() + ".github.io")) {
      throw new Error("Create a GitHub Pages user repository named " + owner + ".github.io, not " + repo);
    }
    const expectedHost = owner.toLowerCase() + ".github.io";
    if (url.hostname.toLowerCase().endsWith(".github.io") && url.hostname.toLowerCase() !== expectedHost) {
      throw new Error("Site URL does not match " + repositorySlug + ": use https://" + expectedHost);
    }
  } else if (url.hostname.toLowerCase().endsWith(".github.io")) {
    owner = url.hostname.split(".")[0];
    repo = owner + ".github.io";
  }
  return {
    ...defaults,
    title,
    author,
    url: url.href.replace(/\/$/, ""),
    description,
    descriptionEn,
    homeTitle: title,
    homeTitleEn: title,
    github: owner ? "https://github.com/" + owner : "",
    repository: owner ? "https://github.com/" + owner + "/" + repo : "",
    home: {
      ...(defaults.home ?? {}),
      hero: {
        zh: { title, description },
        en: { title, description: descriptionEn },
      },
    },
  };
}

export async function configureSite(engineRoot, repositorySlug = "") {
  const contentFile = path.join(templateRoot, "site.config.json");
  const engineFile = path.resolve(engineRoot, "site.config.json");
  const [settings, defaults] = await Promise.all([
    readFile(contentFile, "utf8").then(JSON.parse),
    readFile(engineFile, "utf8").then(JSON.parse),
  ]);
  const generated = prepareSiteConfig(defaults, settings, repositorySlug);
  await writeFile(engineFile, JSON.stringify(generated, null, 2) + "\n");
  return generated.url;
}

const current = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (current) {
  let engineRoot = "";
  let repository = process.env.GITHUB_REPOSITORY ?? "";
  try {
    for (let i = 2; i < process.argv.length; i++) {
      if (process.argv[i] === "--engine" && process.argv[i + 1]) engineRoot = process.argv[++i];
      else if (process.argv[i] === "--repository" && process.argv[i + 1]) repository = process.argv[++i];
      else throw new Error("Usage: node scripts/configure-site.mjs --engine PATH [--repository OWNER/OWNER.github.io]");
    }
    if (!engineRoot) throw new Error("Missing --engine PATH");
    const site = await configureSite(engineRoot, repository);
    console.log("Configured Inkerio for " + site);
  } catch (error) {
    console.error("Site configuration failed: " + error.message);
    process.exitCode = 1;
  }
}
