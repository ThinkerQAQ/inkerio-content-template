# 使用 Inkerio 预览内容模板

[English](../quick-start.md) · [文档导航](index.md)

需要 Git、Node.js 22.12+ 和 npm。将引擎与内容仓库克隆到同级目录：

```sh
mkdir inkerio-workspace
cd inkerio-workspace
git clone https://github.com/ThinkerQAQ/inkerio.git
git clone https://github.com/ThinkerQAQ/inkerio-content-template.git blog-content
cd inkerio
npm ci
node scripts/assemble-content.mjs --content-root ../blog-content
npx --no-install astro dev --port 4321
```

浏览器访问 http://localhost:4321。此流程仅在本机预览，不会发布文章，
也不要求登录账号、配置 MCP、浏览器扩展或 SyndiRelay。
生产构建参考 [Inkerio 快速开始](https://github.com/ThinkerQAQ/inkerio/blob/main/docs/zh-CN/quick-start.md)。

**使用自己的内容：** 从此模板创建新仓库，替换演示文字、
虚构图片及版权策略，与引擎放在同级目录，再执行内容装配命令。
`src/content/` 与 `public/media/` 的权威数据始终保存在内容仓库。
