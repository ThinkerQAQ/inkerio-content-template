# Home page: recent notes and knowledge categories

[简体中文](home-recent-notes.zh-CN.md) · [Back to README](../README.md)

The Inkerio home page's **Engineering Knowledge** section separates **Recent Notes** (individual notes worth revisiting) from **Knowledge Categories** (stable entry points for browsing the whole note archive). The engine builds both sections from content; this template only supplies example data.

## Included bilingual examples

| Demonstration | Chinese note | English translation | Category |
| --- | --- | --- | --- |
| Interactive mind map | [`sample-mindmap.md`](../src/content/notes/sample-mindmap.md) | [`sample-mindmap.md`](../src/content/note-translations/en/sample-mindmap.md) | `ai` |
| Ordinary Markdown note | [`sample-database-note.md`](../src/content/notes/sample-database-note.md) | [`sample-database-note.md`](../src/content/note-translations/en/sample-database-note.md) | `database` |

After assembling this template, the homepage shows these two notes with **localized title, description, category, and update date**, followed by AI and Database in the knowledge-category list. The simple [`sample-note.md`](../src/content/notes/sample-note.md) remains in `example` to demonstrate the minimal note schema; `example` is not configured as an engineering home-page category.

Browse `/`, `/en/`, `/notes/sample-mindmap/`, and `/en/notes/sample-database-note/` to verify the experience.

## How the recent feed is selected

- Only `status: active` and `indexable: true` notes in engine-configured engineering categories are eligible. The English homepage additionally requires a matching note translation, with its own English `description`.
- The feed shows **at most 3 notes** sorted by `updatedAt` (newest first), with **at most 2 per category**. Stable ties use `featured`, `order`, and ID.
- `status: historical` notes remain in their category archives. They are not added to recent notes to fill empty slots.
- Use a meaningful **one-sentence description** for each language. The same content is reused in listings; do not add a separate homepage summary field.
- To show another category on the homepage, update the category list in the engine's `src/components/HomeKnowledgeHub.astro`. Adding a category to content alone does not automatically change the curated homepage navigation.

## Example frontmatter

```yaml
---
title: "数据库索引设计速记"
description: "用订单查询为例，说明复合索引的列顺序、回表与执行计划。"
sourcePath: "Database/sample-database-note.md"
category: database
categoryLabel: Database
order: 1
updatedAt: 2026-10-26T00:00:00Z
status: active
language: zh
indexable: true
---
```

For an English counterpart, use `translationOf: sample-database-note`, `language: en`, and English `title` / `description` / body. The existing bilingual mind-map demo still supports `defaultView: mindmap`; see the [mind-map guide](mindmap-notes.md).
