# Agent Guide — Inkerio Content Template

This repository stores public sample content and content-owned assets for Inkerio. Site runtime, rendering, schema, builds, publishing and deployment belong in the separate `ThinkerQAQ/ThinkerQAQ.github.io` engine repository. BlogCTL keeps its own name.

## Content rules

- `src/content/` owns sample Articles, Notes, Series, Projects, photography, monthly workout summaries, bilingual About pages (`pages/`), and the example copyright policy (`site/copyright.json`). `public/media/` owns their assets.
- Keep Chinese and English counterparts aligned, preserving frontmatter and series relationships.
- Photography and workout examples are fictional. Preserve `"demo": true` on workout summaries; never introduce personal training records, credentials or private content.
- Read relevant Markdown sections before editing. For a whole-document review, inspect every section before making whole-document claims.
- Use existing editor/language-server capabilities when available; fall back to scoped reads and text search. No DevTool service is required.
- Keep build logic and document-processing infrastructure in the engine or mature external tools rather than adding implementations here.

## Workflow

Check the current branch and worktree before editing. Make small coherent commits, verify Markdown links and validate representative content through Inkerio's existing assembly/schema checks. Use isolated worktrees when another task is active. Do not merge without explicit user approval.

For site setup and publishing, link to the engine's Tutorial and BlogCTL documentation instead of duplicating their full instructions. Maintain README.md and README_ZH.md together.
