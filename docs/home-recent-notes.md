# Home page: recent notes and knowledge categories

[简体中文](home-recent-notes.zh-CN.md) · [Back to README](../README.md)

Inkerio shows **Projects → Recent Notes → Engineering Knowledge → Beyond Engineering** as peer sections after its article/series highlights. **Recent Notes** presents recently maintained *individual notes across all categories*. The latter two sections are stable category navigation, separated into technical and nontechnical topics. The engine builds these sections from content; this template supplies bilingual examples.

## Included bilingual examples

| Demonstration | Chinese note | English translation | Category |
| --- | --- | --- | --- |
| Interactive mind map | [`sample-mindmap.md`](../src/content/notes/sample-mindmap.md) | [`sample-mindmap.md`](../src/content/note-translations/en/sample-mindmap.md) | `ai` |
| Ordinary Markdown note | [`sample-database-note.md`](../src/content/notes/sample-database-note.md) | [`sample-database-note.md`](../src/content/note-translations/en/sample-database-note.md) | `database` |
| Beyond Engineering note | [`sample-photography-note.md`](../src/content/notes/sample-photography-note.md) | [`sample-photography-note.md`](../src/content/note-translations/en/sample-photography-note.md) | `photography` |

After assembling this template, **Recent Notes** shows the three entries with localized titles, descriptions, categories, and update dates. **Engineering Knowledge** lists AI and Database; **Beyond Engineering** lists Photography. The simple [`sample-note.md`](../src/content/notes/sample-note.md) remains in `example` to demonstrate the minimal note schema; categories do not need to appear in the curated lists for their notes to be eligible for Recent Notes.

Browse `/`, `/en/`, `/notes/sample-mindmap/`, `/en/notes/sample-database-note/`, and `/en/notes/sample-photography-note/` to verify the experience.

## How the recent feed is selected

- Any category is eligible: only `status: active` and `indexable: true` notes enter Recent Notes. The English homepage additionally requires a matching translation with its own English `description`.
- The feed shows **at most 3 notes** sorted by `updatedAt` (newest first), with **at most 2 per category**. Stable ties use `featured`, `order`, and ID.
- `status: historical` notes remain in their category archives. They are not added to recent notes to fill empty slots.
- Use a meaningful **one-sentence description** for each language. The same content is reused in listings; do not add a separate homepage summary field.
- To show another *category entry* under Engineering Knowledge or Beyond Engineering, update the corresponding list in the engine's `src/components/HomeKnowledgeHub.astro`. This does not change Recent Notes eligibility.

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
