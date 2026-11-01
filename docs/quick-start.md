# Preview the template with Inkerio

[简体中文](zh-CN/quick-start.md) · [Template docs](index.md)

Requires Git, Node.js 22.12+ and npm. Clone engine and content
repositories as sibling directories:

```sh
mkdir inkerio-workspace
cd inkerio-workspace
git clone https://github.com/ThinkerQAQ/inkerio.git
git clone https://github.com/ThinkerQAQ/inkerio-content-template.git blog-content
cd inkerio
npm ci
node scripts/assemble-content.mjs --content-root ../blog-content
npx --no-install astro dev --port 4321
```

Open http://localhost:4321. This local preview does not publish content
or require an account, an MCP connection, a browser extension, or SyndiRelay.
For a production build see [Inkerio Quick Start](https://github.com/ThinkerQAQ/inkerio/blob/main/docs/quick-start.md).

**Own content:** create a repository from this template, replace the
synthetic demo content and license policy, clone it beside the engine,
then rerun the assembly command with your directory. Keep `src/content/`
and `public/media/` in the content repo as the authoritative files.
