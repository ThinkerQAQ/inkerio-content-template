# Inkerio Content Template

[English](README.md) · [Inkerio](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io) · [完整教程](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/docs/zh-CN/tutorial/first-site.md)

**Inkerio** 双语静态博客引擎的公开示例内容仓库。这里只保存 Markdown、示例数据和内容资源；Astro 渲染、构建、部署与 BlogCTL 代码由引擎仓库维护。

## 运行示例

将引擎与内容仓库放在同一级目录：

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

需要 Node.js 22+、Go 1.27.1、npm 和 Git。访问 [localhost:4321](http://localhost:4321)。这里直接启动 Astro，跳过图表预渲染；完整构建依赖与验证步骤见[引擎教程](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/docs/zh-CN/tutorial/first-site.md)。

正式维护自己的内容时，在 GitHub 点击 **Use this template** 创建仓库，或 Fork 本仓库，再把自己的仓库克隆为 `blog-content`。本地目录名不必与远端仓库同名。文章修改应提交到内容仓库，并重新装配；引擎中的 `src/content/` 是生成的构建输入。

## 目录结构

| 路径 | 内容 |
| --- | --- |
| `src/content/articles/`、`articles/en/` | 示例文章与英文翻译 |
| `src/content/notes/`、`note-translations/en/` | 示例笔记与翻译 |
| `src/content/projects/`、`series/` | 项目和系列示例 |
| `src/content/life/` | 虚构的摄影记录、年份归档与草稿 |
| `src/content/workout-summaries/` | 虚构的月度健身统计 |
| `src/data/content-manifest.json` | 内容清单 |
| `public/media/` | 示例封面、摄影原图与缩略图 |

字段定义以 [Inkerio Schema 参考](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/docs/zh-CN/reference/content-schema.md)链接的 TypeScript 实现为准。此仓库是公开演示数据的唯一维护位置，不包含另一套引擎实现。

## 演示数据

摄影示例覆盖 1、4、9、12 张图片布局、长文案、年份归档和草稿，图片均为合成图。健身数据完全虚构，全部汇总带有 `"demo": true`，不包含任何人的训练明细、动作、重量或凭据。作为个人站点发布前，应替换或删除这些示例。

## 文档与开发

- [Inkerio 文档](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/docs/zh-CN/index.md)：网站运行、内容 Schema 与部署。
- [BlogCTL 文档](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io/blob/main/tools/blogctl/docs/zh-CN/index.md)：配套管理工具、发布与配置。
- [AGENTS.md](AGENTS.md)：内容编辑约束。

使用模板不需要安装 DevTool。保留的 `.devtool.toml` 只是可选的历史配置，不属于 Inkerio 运行依赖。
