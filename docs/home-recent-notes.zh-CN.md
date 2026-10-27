# 首页：最近笔记与知识分类

[English](home-recent-notes.md) · [返回 README](../README_ZH.md)

Inkerio 首页在文章和系列展示之后，依次排列「**项目 → 最近笔记 → 技术知识 → 工程之外**」四个平级栏目。**最近笔记**按时间展示所有分类中的近期笔记；「技术知识」与「工程之外」则分别展示技术、非技术分类集合。布局和筛选规则由引擎负责，内容模板提供双语示例。

## 模板中的双语示例

| 示例类型 | 中文笔记 | 英文译文 | 分类 |
| --- | --- | --- | --- |
| 可交互思维导图 | [`sample-mindmap.md`](../src/content/notes/sample-mindmap.md) | [`sample-mindmap.md`](../src/content/note-translations/en/sample-mindmap.md) | `ai` |
| 普通 Markdown 笔记 | [`sample-database-note.md`](../src/content/notes/sample-database-note.md) | [`sample-database-note.md`](../src/content/note-translations/en/sample-database-note.md) | `database` |
| 工程之外的摄影笔记 | [`sample-photography-note.md`](../src/content/notes/sample-photography-note.md) | [`sample-photography-note.md`](../src/content/note-translations/en/sample-photography-note.md) | `photography` |

装配模板后，独立的「最近笔记」栏目展示这三篇内容的**标题、简介、分类和更新时间**。「技术知识」只展示 AI、数据库分类，「工程之外」则展示摄影分类。原来的 [`sample-note.md`](../src/content/notes/sample-note.md) 保留在 `example` 分类，演示最简笔记格式；笔记不需要属于首页精选分类也可以参与最近笔记筛选。

可以访问 `/`、`/en/`、`/notes/sample-mindmap/`、`/en/notes/sample-database-note/` 和 `/en/notes/sample-photography-note/` 验证展示效果。

## 最近笔记的筛选规则

- 最近笔记不限技术分类，只要求 `status: active`、`indexable: true`；英文首页还要求对应英文译文，并展示英文 `description`。
- 按 `updatedAt` 从新到旧选择**最多 3 篇**，**同一分类最多 2 篇**。日期相同时根据 `featured`、`order` 和 ID 稳定排序。
- `status: historical` 的旧笔记继续出现在知识分类集合，不为了凑满最近笔记数量而混入列表。
- 中英文 `description` 都应写成**简洁、具体的一句话**。首页和笔记列表复用这个字段，不需要单独添加首页简介字段。
- 如需在「技术知识」或「工程之外」增加*分类入口*，应修改引擎 `src/components/HomeKnowledgeHub.astro` 中对应分类配置；这与最近笔记是否能展示没有关系。

## Frontmatter 示例

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

英文译文使用 `translationOf: sample-database-note`、`language: en`，并填写独立的英文 `title`、`description` 与正文。思维导图示例仍支持 `defaultView: mindmap`，详见[思维导图示例教程](mindmap-notes.zh-CN.md)。
