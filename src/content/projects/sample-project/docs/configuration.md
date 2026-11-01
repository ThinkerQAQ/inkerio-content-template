---
title: 配置参考
description: 项目文档由项目关联和显式章节顺序组成。
language: zh
updatedAt: '2026-11-01'
project: sample-project
---

## 项目关联

文档通过 `project: sample-project` 关联对应项目。

## 文档顺序

`project.md` 的 `documents` 明确指定章节顺序。中文与英文共享章节 ID，语言切换会进入对应译文。

## 内容隔离

项目 README 和文档共同存储在 `src/content/projects/<project>/`，文档位于其 `docs/` 子目录；两者都不会加入普通文章列表和文章 RSS。
