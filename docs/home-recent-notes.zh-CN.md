# 首页：最近笔记与知识分类

[English](home-recent-notes.md) · [返回 README](../README_ZH.md)

Inkerio 首页「**技术知识**」分为两部分：「**最近笔记**」展示具体且近期维护的笔记，「**知识分类**」提供长期、稳定的知识库分类入口。布局和筛选规则由引擎负责，内容模板负责提供双语示例。

## 模板中的双语示例

| 示例类型 | 中文笔记 | 英文译文 | 分类 |
| --- | --- | --- | --- |
| 可交互思维导图 | [`sample-mindmap.md`](../src/content/notes/sample-mindmap.md) | [`sample-mindmap.md`](../src/content/note-translations/en/sample-mindmap.md) | `ai` |
| 普通 Markdown 笔记 | [`sample-database-note.md`](../src/content/notes/sample-database-note.md) | [`sample-database-note.md`](../src/content/note-translations/en/sample-database-note.md) | `database` |

装配模板后，首页会展示这两篇笔记的**标题、简介、分类、更新时间**，其下方的知识分类列表则显示 AI 与数据库。原来的 [`sample-note.md`](../src/content/notes/sample-note.md) 保留在 `example` 分类，用来展示最简单的笔记格式；`example` 不属于首页精选的技术分类。

可以访问 `/`、`/en/`、`/notes/sample-mindmap/` 和 `/en/notes/sample-database-note/` 验证展示效果。

## 最近笔记的筛选规则

- 只选 `status: active`、`indexable: true`，且分类存在于引擎首页技术分类配置中的笔记；英文首页还要求存在对应英文译文，并展示英文 `description`。
- 按 `updatedAt` 从新到旧选择**最多 3 篇**，**同一分类最多 2 篇**。日期相同时根据 `featured`、`order` 和 ID 稳定排序。
- `status: historical` 的旧笔记继续出现在知识分类集合，不为了凑满最近笔记数量而混入列表。
- 中英文 `description` 都应写成**简洁、具体的一句话**。首页和笔记列表复用这个字段，不需要单独添加首页简介字段。
- 如果想把新分类展示到首页，需要在引擎 `src/components/HomeKnowledgeHub.astro` 中配置；只在内容仓库中添加分类，不会自动改变首页精选分类列表。

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
