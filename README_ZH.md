# Inkerio Content Template

[English](README.md) · [Inkerio](https://github.com/ThinkerQAQ/inkerio) · [完整教程](https://github.com/ThinkerQAQ/inkerio/blob/main/docs/zh-CN/tutorial/first-site.md)

**Inkerio** 双语静态博客引擎的公开示例内容仓库。这里只保存 Markdown、示例数据和内容资源；Astro 渲染与构建由 Inkerio 维护；个人站点部署和 BlogCTL 分发工具单独管理。

## 运行示例

将引擎与内容仓库放在同一级目录：

```bash
mkdir inkerio-workspace
cd inkerio-workspace
git clone https://github.com/ThinkerQAQ/inkerio.git
git clone https://github.com/ThinkerQAQ/inkerio-content-template.git blog-content
cd inkerio
npm ci
node scripts/assemble-content.mjs --content-root ../blog-content
npx --no-install astro dev --port 4321
```

需要 Node.js 22+、npm 和 Git。访问 [localhost:4321](http://localhost:4321)。这里直接启动 Astro，跳过图表预渲染；完整构建依赖与验证步骤见[引擎教程](https://github.com/ThinkerQAQ/inkerio/blob/main/docs/zh-CN/tutorial/first-site.md)。

正式维护自己的内容时，在 GitHub 点击 **Use this template** 创建仓库，或 Fork 本仓库，再把自己的仓库克隆为 `blog-content`。本地目录名不必与远端仓库同名。文章修改应提交到内容仓库，并重新装配；引擎中的 `src/content/` 是生成的构建输入。

## 目录结构

| 路径 | 内容 |
| --- | --- |
| `src/content/articles/`、`articles/en/` | 示例文章与英文翻译 |
| `src/content/notes/`、`note-translations/en/` | 示例笔记与翻译，含中英文交互式思维导图 |
| `src/content/projects/`、`series/` | 项目和系列示例 |
| `src/content/life/` | 虚构的摄影记录、年份归档与草稿 |
| `src/content/pages/` | 中英文 About 页面及 SEO 摘要 |
| `src/content/site/copyright.json` | 全站及分发版权文案，含中英文 |
| `src/content/workout-summaries/` | 虚构的月度健身统计 |
| `src/data/content-manifest.json` | 内容清单 |
| `public/media/` | 示例封面、摄影原图与缩略图 |

字段定义以 [Inkerio Schema 参考](https://github.com/ThinkerQAQ/inkerio/blob/main/docs/zh-CN/reference/content-schema.md)链接的 TypeScript 实现为准。此仓库是公开演示数据的唯一维护位置，不包含另一套引擎实现。

## 最近笔记与知识分类

首页文章与系列之后，依次展示独立的「**项目 → 最近笔记 → 技术知识 → 工程之外**」栏目。模板使用三篇中英文示例展示跨分类的最近笔记：AI 分类的[交互式思维导图](src/content/notes/sample-mindmap.md)、数据库分类的[索引设计笔记](src/content/notes/sample-database-note.md)和[摄影笔记](src/content/notes/sample-photography-note.md)。AI、数据库归入「技术知识」，摄影归入「工程之外」。原来的最简 `sample-note.md` 仍属于 `example` 分类。详见[最近笔记指南](docs/home-recent-notes.zh-CN.md)。

## 思维导图示例

模板新增了[软件系统设计思维导图](src/content/notes/sample-mindmap.md)及其[英文译文](src/content/note-translations/en/sample-mindmap.md)。装配后可访问 `/notes/sample-mindmap/` 与 `/en/notes/sample-mindmap/`，两种语言均默认进入思维导图，也可以切换回 Markdown。操作方式、配置和复制方法见[思维导图示例指南](docs/mindmap-notes.zh-CN.md)。

## 演示数据

摄影示例覆盖 1、4、9、12 张图片布局、长文案、年份归档和草稿，图片均为合成图。健身数据完全虚构，全部汇总带有 `"demo": true`，不包含任何人的训练明细、动作、重量或凭据。作为个人站点发布前，应替换或删除这些示例。

## 文档与开发

- [Inkerio 文档](https://github.com/ThinkerQAQ/inkerio/blob/main/docs/zh-CN/index.md)：网站运行、内容 Schema 与部署。
- [BlogCTL 文档](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/tools/blogctl/docs/zh-CN/index.md)：配套管理工具、发布与配置。
- [AGENTS.md](AGENTS.md)：内容编辑约束。

使用模板不需要安装 DevTool。保留的 `.devtool.toml` 只是可选的历史配置，不属于 Inkerio 运行依赖。

## About 页面与版权配置

中英文 About 示例位于 `src/content/pages/about.md` 和 `src/content/pages/en/about.md`，修改正文无需修改 Astro 组件。全站版权声明与 BlogCTL 分发声明统一维护于 `src/content/site/copyright.json` 的 `zh`、`en` 字段。Inkerio 装配内容并渲染，BlogCTL 根据内容根目录读取该配置；About 摘要需与版权策略保持一致。示例使用 CC BY-NC-SA 4.0（原创文字与随文技术图示）及 All Rights Reserved（摄影与独立插图）作说明，**不意味着模板使用者已获得第三方素材的授权**；发布前须自行确认版权并替换示例作者和授权范围。

## 模板许可与演示内容

本仓库原创的**模板骨架、配置和文档**采用 [MIT](LICENSE)；这**不表示**演示文章及图片也采用 MIT 许可。`src/content/site/copyright.json` 是供未来站点作者参考的**示例版权策略**，并非授权转载本仓库全部素材。公开发布站点前应替换示例正文和图片，详细边界见[许可证适用范围](COPYRIGHT.md)。
