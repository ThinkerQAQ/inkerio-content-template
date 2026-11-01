# Inkerio Content Template

[简体中文](README_ZH.md) · [Inkerio engine](https://github.com/ThinkerQAQ/inkerio) · [Live example](https://thinkerqaq.com/) · [Example deployment source](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io)

A ready-to-use content repository for [Inkerio](https://github.com/ThinkerQAQ/inkerio), an Astro-based bilingual static blog engine. It contains sample Markdown articles, notes, mind maps, projects, photography, About pages and a minimal GitHub Pages deployment workflow.

**What is the simplest way to run your own blog?** Create one GitHub repository from this template. Inkerio remains a separate engine, fetched automatically by GitHub Actions. You do not need to fork the engine, create a second deployment repository, or install SyndiRelay.

## Quick Start — publish your own GitHub Pages blog

**Prerequisites:** a GitHub account. A public repository is required for GitHub Pages on GitHub Free. The source content in a public repository—including unpublished Markdown drafts—is publicly readable.

### 1. Create your blog repository

1. Open [Inkerio Content Template](https://github.com/ThinkerQAQ/inkerio-content-template).
2. Select **Use this template → Create a new repository** (do not Fork).
3. Choose your GitHub account as the owner. Name the repository **`YOUR_USERNAME.github.io`**, replacing `YOUR_USERNAME` with your actual GitHub username in lowercase (for example, `alice.github.io`).
4. Select **Public**, then create the repository.

This is the repository you will maintain. It stores your content and personal site configuration, but no copy of the Inkerio engine.

### 2. Configure your site

Open `site.config.json` in your new repository and edit these five fields:

```json
{
  "title": "Alice's Blog",
  "author": "Alice",
  "url": "https://alice.github.io",
  "description": "我的个人博客，记录技术与生活。",
  "descriptionEn": "My personal blog about technology and life."
}
```

Replace `alice` with your own GitHub username. **The `url` must match your actual GitHub Pages address.** Do not leave `YOUR_NAME` or `YOUR_USERNAME` placeholders: the build rejects them with an actionable error.

**Before public deployment, replace the bundled demo articles, photos, example workout records, About content and copyright text with your own materials.** Their limited local-preview permission does not cover public republication. The deployment workflow runs `node scripts/check-publication.mjs` and fails with a list of leftover demo files; it does not silently deploy or delete them. You may remove the sample content directories and add your own Markdown, or replace the sample files with your own work under different filenames.

Personalize your content in the same repository: `src/content/articles/` for posts, `src/content/notes/` for notes, `src/content/pages/about.md` and `src/content/pages/en/about.md` for About, `public/media/` for images, and `src/content/site/copyright.json` for your bilingual copyright policy. The example policy is **not** automatically the license for your writing; update it to your actual rights.

### 3. Deploy to GitHub Pages

1. In your new repository open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
2. Commit your edited `site.config.json` to `main`. If the template was just created and no run appears, open **Actions → Deploy my Inkerio blog to GitHub Pages → Run workflow**.
3. Check the build and deployment jobs in **Actions**. The workflow automatically checks out a **pinned Inkerio commit**, merges your configuration with the engine defaults, assembles content, checks the site, and uploads the static website.
4. Open **https://YOUR_USERNAME.github.io/** and verify both the home page and `/en/`.

No personal access token, account cookie, third-party publishing authorization or Cloudflare account is required. This repository's workflow does **not** publish the demonstration site from the original template.

If GitHub Pages has not yet been enabled, check **Settings → Pages** and allow GitHub Actions for this repository. The deployment requires the workflow's built-in `pages: write` and `id-token: write` permissions, not your own API key.

### 4. Preview locally (optional)

You need Git, Node.js **22.12+** and npm. Keep your content repo and the engine as sibling directories:

```bash
mkdir inkerio-workspace && cd inkerio-workspace
git clone https://github.com/ThinkerQAQ/inkerio.git
git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git my-blog
cd inkerio
npm ci
node ../my-blog/scripts/configure-site.mjs --engine .
node scripts/assemble-content.mjs --content-root ../my-blog
npx --no-install astro dev --port 4321
```

Open http://localhost:4321. The commands use **your** content and site settings. Do not use `npm run dev:quick` for your own content: that shortcut loads the generic demonstration template instead. After changing Markdown, rerun the content assembly; for a complete production build use `npm run check` followed by `npm run build`.

### 5. Custom domain (optional)

To use your own domain, change `site.config.json` → `url` to its HTTPS origin, configure that domain in **Settings → Pages → Custom domain**, and update its DNS as described by [GitHub's official custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). A `CNAME` file by itself does not configure GitHub Pages for a custom domain.

## Troubleshooting

If Pages fails on **sample content**, check the file paths printed by `check-publication.mjs` and remove or replace them. If the site URL does not match the GitHub Pages username, correct `site.config.json`. If Pages does not run, select **GitHub Actions** under **Settings → Pages** and launch the workflow manually. Each subsequent commit to site content or configuration triggers a new build.

## Repository boundaries

| Repository | Role |
| --- | --- |
| **Your `username.github.io`** (created from this template) | Content, branding, copyright, and the Pages workflow |
| [Inkerio](https://github.com/ThinkerQAQ/inkerio) | Reusable Astro rendering, content schema, search and static builds |
| [SyndiRelay](https://github.com/ThinkerQAQ/syndirelay) | **Optional:** publish your Markdown on other content platforms; not required to deploy |
| [ThinkerQAQ.github.io](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io) | **Live production example:** independently maintained, with additional site-specific Workers and deployment systems; it is **not** the recommended starter repository |

You can later point SyndiRelay at this same content repository. No second `blog-content` repository is required.

**License:** Original template scaffolding/configuration is [MIT](LICENSE). Demo articles, photos, illustrations and other media are **not automatically MIT-licensed**; see [COPYRIGHT.md](COPYRIGHT.md). Replace demo materials and fictional data before publishing. Never commit secrets, API keys, cookies or sensitive draft content to a public repository.




### Project README and docs

Keep each project in `src/content/projects/<id>/`: `project.md` holds the project metadata, `README_ZH.md` and `README.md` hold the bilingual introduction, `docs/` holds chapters (English counterparts in `docs/en/`), and `series.md` holds the series metadata and chapter order. README is the first series entry. Projects, docs and ordinary articles share `ReadingLayout`, the series outline, table of contents, reading controls and chapter navigation; only their content storage and feed membership differ. Projects/docs stay out of ordinary article lists and article RSS.

The optional engine command `node scripts/sync-project-content.mjs --content-root /path/to/content` syncs README files and all Markdown files in a public repository’s `docs/`, preserves subdirectories, pairs translations and generates the series. Its manifest is `src/data/project-sources.json`; each `projects` entry specifies `id`, `repository` (`owner/repo`), a pinned 40-character `revision`, `files` (`zh`/`en` README paths), and optional `routes` mappings. Set `docs: false` for a README-only import. Sources are fetched before snapshots change; page requests and builds use committed local content.
