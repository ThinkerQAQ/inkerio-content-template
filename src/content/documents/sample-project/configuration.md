---
title: 配置参考
description: 文档系列由项目关联和显式章节顺序组成。
series: sample-project-docs
language: zh
updatedAt: '2026-11-01'
---

## 项目关联

系列通过 `project: sample-project` 关联对应项目。

## 文档顺序

`relatedDocuments` 明确指定章节顺序。中文与英文共享章节 ID，语言切换会进入对应译文。

## 内容隔离

文档存储在 `src/content/documents/`，项目正文存储在 `src/content/projects/`；两者都不会加入普通文章列表和文章 RSS。
