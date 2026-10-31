# Inkerio Content Template

[简体中文](README_ZH.md) · [Inkerio](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io) · [Tutorial](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/docs/tutorial/first-site.md)

Public sample content for **Inkerio**, the Astro-based bilingual static blog engine. This repository owns Markdown, sample data and content media; rendering, builds, deployment and BlogCTL belong to the engine repository.

## Run the examples

Keep the engine and content checkouts beside each other:

```bash
mkdir inkerio-workspace
cd inkerio-workspace
git clone https://github.com/ThinkerQAQ/ThinkerQAQ.github.io.git
git clone https://github.com/ThinkerQAQ/inkerio-content-template.git blog-content
cd ThinkerQAQ.github.io
npm ci
go run ./tools/blogctl/cmd site assemble --content-root ../blog-content
npx --no-install astro dev --port 4321
```

Requires Node.js 22+, Go 1.27.1, npm and Git. Open [localhost:4321](http://localhost:4321). This preview skips diagram rendering; the [engine tutorial](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/docs/tutorial/first-site.md) explains full build dependencies and validation.

For your own writing, use **Use this template** on GitHub or fork the repository, then clone your repository as `blog-content`. The local directory name does not have to match the remote repository name. Edit the content checkout and repeat assembly; the engine's assembled `src/content/` is generated output.

## Repository layout

| Path | Contents |
| --- | --- |
| `src/content/articles/`, `articles/en/` | Example articles and English translations |
| `src/content/notes/`, `note-translations/en/` | Example notes and translations, including a bilingual interactive mind map |
| `src/content/projects/`, `series/` | Project and series examples |
| `src/content/life/` | Fictional photography entries, archives and a draft |
| `src/content/workout-summaries/` | Fictional monthly workout summaries |
| `src/data/content-manifest.json` | Content manifest |
| `public/media/` | Sample covers, photo originals and thumbnails |

The [Inkerio schema reference](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/docs/reference/content-schema.md) links to the actual TypeScript definitions. This template is the single maintenance location for public demo content, not a second engine implementation.

## Recent notes and knowledge categories

The homepage now places **Projects → Recent Notes → Engineering Knowledge → Beyond Engineering** in separate sections after the article highlights. Three bilingual examples demonstrate how the recent feed draws from different categories: an AI [interactive mind map](src/content/notes/sample-mindmap.md), a [database index note](src/content/notes/sample-database-note.md), and a [photography note](src/content/notes/sample-photography-note.md). The AI and Database categories appear under Engineering Knowledge; Photography appears under Beyond Engineering. The original minimal `sample-note.md` stays in `example` as an additional schema example. See the [recent-notes guide](docs/home-recent-notes.md).

## Mind-map example

The template includes a Chinese [software system design mind map](src/content/notes/sample-mindmap.md) and its [English translation](src/content/note-translations/en/sample-mindmap.md). After assembly, preview `/notes/sample-mindmap/` and `/en/notes/sample-mindmap/`; both open in mind-map mode and allow switching back to Markdown. See the [mind-map sample guide](docs/mindmap-notes.md) for controls, configuration, and how to copy it.

## Demo data

Photography entries include 1, 4, 9 and 12-image layouts, long captions, archive years and a draft. Images are synthetic. Workout data is entirely fictional and every summary has `"demo": true`; it contains no personal training sessions, exercises, weights or credentials. Replace or remove these examples before presenting a personal site.

## Documentation and development

- [Inkerio documentation](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/docs/index.md): site setup, content schema and deployment.
- [BlogCTL documentation](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/tools/blogctl/docs/index.md): companion application, publishing and configuration.
- [AGENTS.md](AGENTS.md): content-editing boundaries.

No DevTool installation is required. The legacy `.devtool.toml` file is optional historical configuration, not part of the Inkerio runtime.

## About page and copyright policy

The bilingual sample About pages are stored in `src/content/pages/about.md` and `src/content/pages/en/about.md`. Edit them as content, not as Astro components. Copyright wording for the whole site and BlogCTL syndication is in `src/content/site/copyright.json`, with `zh` and `en` translations. Inkerio assembles these files into `src/content/`; BlogCTL reads the policy from your configured content root. Keep the About summary consistent with the policy.
