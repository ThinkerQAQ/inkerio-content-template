# 思维导图笔记示例

[English](mindmap-notes.md) · [返回 README](../README_ZH.md)

本内容模板新增了两份结构对应的**软件系统设计**思维导图笔记：

| 语言 | 源文件 | 预览路由 |
| --- | --- | --- |
| 中文 | [`src/content/notes/sample-mindmap.md`](../src/content/notes/sample-mindmap.md) | `/notes/sample-mindmap/` |
| 英文 | [`src/content/note-translations/en/sample-mindmap.md`](../src/content/note-translations/en/sample-mindmap.md) | `/en/notes/sample-mindmap/` |

原文归属 `ai` 技术分类，因此也会出现在模板首页的「最近笔记」中，详见[最近笔记指南](home-recent-notes.zh-CN.md)。原文配置 `defaultView: mindmap`，使笔记默认显示导图。英文译文使用 `translationOf: sample-mindmap` 关联原文、继承其默认视图，同时以英文 Markdown 正文生成自己的导图。

## 本地预览

按 [README](../README_ZH.md) 克隆引擎与本模板后，在**引擎目录**执行：

```bash
go run ./tools/blogctl/cmd site assemble --content-root ../blog-content
npm run check
npx --no-install astro dev --port 4321
```

访问[中文预览](http://localhost:4321/notes/sample-mindmap/)与[英文预览](http://localhost:4321/en/notes/sample-mindmap/)。页面右下角在阅读跳转按钮上方提供一个**圆形图标按钮**，与下方按钮同尺寸、同一右侧对齐线。点击一次切换正文与导图，切换后回到笔记正文起点；图标表示将进入的视图，鼠标悬停可查看提示。导图可点击节点展开或折叠、拖动画布、滚轮缩放，并使用画布右上角的独立工具栏进行放大、缩小、全局适配、递归展开控制和全屏。大型导图默认折叠深层级。

## 复制为自己的导图

把中文文件复制为 `src/content/notes/YOUR_ID.md`，修改标题、简介、`sourcePath`、`order` 和正文。建议最上层用一个 `#` 根标题，使用 `##`、`###` 标题和嵌套列表描述分支。`defaultView: mindmap` 是可选字段，不配置则默认显示 Markdown。

英文版放在 `src/content/note-translations/en/YOUR_ID.md`，设置 `translationOf: YOUR_ID`，并翻译正文。**不需要在英文译文中重复设置 `defaultView`**；默认视图由原文继承。中英文应保持相同的知识层级。

此功能是将**Markdown 渲染为 Markmap 思维导图**，不是原生读取 `.xmind`。已有 XMind 文件需要先转为层级化 Markdown 并检查内容。禁用 JavaScript 时笔记正文仍可阅读。

更多细节见引擎的[思维导图完整教程](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/docs/zh-CN/how-to/mindmap-notes.md)与[字段说明](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/docs/zh-CN/reference/content-schema.md)。
