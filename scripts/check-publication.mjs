import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const demoPrefix = /^(?:src\/content\/(?:articles|notes|note-translations|projects|series)\/.*sample[^/]*\.md|public\/media\/(?:articles\/sample-article|life\/sample-album)\/.*)$/i;

async function walk(dir) {
  const files = [];
  try {
    for (const ent of await readdir(path.join(root, dir), { withFileTypes: true })) {
      const rel = path.posix.join(dir, ent.name);
      if (ent.isDirectory()) files.push(...await walk(rel));
      else if (ent.isFile()) files.push(rel);
    }
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  return files;
}

export function detectDemoPublication(files) {
  const examples = files.filter((f) => demoPrefix.test(f));
  return [...new Set(examples)].sort();
}

export async function checkPublication() {
  const paths = [
    ...await walk("src/content"),
    ...await walk("public/media"),
  ];
  const examples = detectDemoPublication(paths);
  for (const item of paths.filter((f) => f.startsWith("src/content/life/") && f.endsWith(".md"))) {
    const text = await readFile(path.join(root, item), "utf8");
    if (/【演示数据】|\/media\/life\/sample-album\/|演示照片/.test(text)) examples.push(item);
  }
  const about = await readFile(path.join(root, "src/content/pages/about.md"), "utf8").catch((err) => err.code === "ENOENT" ? "" : Promise.reject(err));
  const copyright = await readFile(path.join(root, "src/content/site/copyright.json"), "utf8").catch((err) => err.code === "ENOENT" ? "" : Promise.reject(err));
  const aboutEn = await readFile(path.join(root, "src/content/pages/en/about.md"), "utf8").catch((err) => err.code === "ENOENT" ? "" : Promise.reject(err));
  if (/sample site|example about|Inkerio demo|About the Demo Site/i.test(aboutEn)) examples.push("src/content/pages/en/about.md");
  if (/这里是 Inkerio 的示例内容站点|关于示例站点|This is a sample site/i.test(about)) examples.push("src/content/pages/about.md");
  if (/示例作者|Sample Author|Example license only/i.test(copyright)) examples.push("src/content/site/copyright.json");
  for (const item of paths.filter((f) => f.startsWith("src/content/workout-summaries/") && f.endsWith(".json"))) {
    const data = JSON.parse(await readFile(path.join(root, item), "utf8"));
    if (data.demo === true) examples.push(item);
  }
  if (examples.length) throw new Error(
    "Public deployment blocked: replace or remove the bundled demonstration content and sample copyright policy before publishing.\n"
    + examples.slice(0, 8).map((f) => " - " + f).join("\n")
    + (examples.length > 8 ? "\n - ... and " + (examples.length - 8) + " more example file(s)." : "")
    + "\nSee README.md / README_ZH.md, Step 2."
  );
  console.log("No bundled demo content markers detected; public content remains the site owner's responsibility.");
}

const direct = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (direct) checkPublication().catch((error) => { console.error(error.message); process.exitCode = 1; });
