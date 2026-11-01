# Inkerio Content Template

[English](README.md) · [Inkerio 引擎](https://github.com/ThinkerQAQ/inkerio) · [线上示例](https://thinkerqaq.com/) · [实际部署代码](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io)

这是 [Inkerio](https://github.com/ThinkerQAQ/inkerio) 双语静态博客引擎的公开内容模板，包含 Markdown 文章、笔记、思维导图、项目、摄影、About 页面，以及最小化的 GitHub Pages 自动部署流程。

**对于第一次接触 Inkerio 的用户，我们希望解决的是一个具体问题：如何从零搭建并发布自己的博客？** 最简单的方案只需要创建**一个** GitHub 仓库。Inkerio 作为独立引擎由 GitHub Actions 自动拉取，无需 Fork 引擎、额外建立部署仓库，更不需要安装 SyndiRelay。

## Quick Start：从零搭建自己的 GitHub Pages 博客

**准备工作：** 一个 GitHub 账号。GitHub Free 的 Pages 网站需使用公开仓库。注意，公开仓库内的 Markdown 草稿即使不会被博客渲染，也仍然可能被他人直接查看。

### 1. 创建自己的博客仓库

1. 打开 [Inkerio Content Template](https://github.com/ThinkerQAQ/inkerio-content-template)。
2. 点击 **Use this template → Create a new repository**，不需要 Fork。
3. Owner 选择自己的 GitHub 账号。仓库名填写 **`YOUR_USERNAME.github.io`**，将 `YOUR_USERNAME` 替换为自己的 GitHub 用户名（使用小写）。例如账号为 `alice`，仓库就是 `alice.github.io`。
4. 选择 **Public**，创建仓库。

至此已经得到自己的内容仓库，今后文章、图片、站点配置都在这里管理。引擎代码不必复制进来。

### 2. 配置自己的博客

打开新仓库根目录的 `site.config.json`，修改五个字段：

```json
{
  "title": "Alice 的博客",
  "author": "Alice",
  "url": "https://alice.github.io",
  "description": "我的个人博客，记录技术与生活。",
  "descriptionEn": "My personal blog about technology and life."
}
```

其中 `url` 必须与实际 GitHub Pages 网址一致，`alice` 换成自己的用户名。**不要保留 `YOUR_NAME`、`YOUR_USERNAME` 占位符**，构建时会直接报错，避免把示例身份误发布为正式网站。

文章保存在 `src/content/articles/`，笔记在 `src/content/notes/`，About 页面分别是 `src/content/pages/about.md` 和 `src/content/pages/en/about.md`，图片放在 `public/media/`。全站中英文版权说明由 `src/content/site/copyright.json` 维护，发布前应按自己的实际版权政策调整，不能直接照搬演示作者的授权声明。

### 3. 部署到 GitHub Pages

1. 打开新仓库的 **Settings → Pages → Build and deployment**，将 **Source** 设为 **GitHub Actions**。
2. 把修改后的 `site.config.json` 提交至 `main`。如果新建仓库后没有自动运行，进入 **Actions → Deploy my Inkerio blog to GitHub Pages → Run workflow** 手动执行一次。
3. 在 **Actions** 查看构建与部署结果。工作流会自动检出**固定版本的 Inkerio 源码**，装配本站配置和文章，执行类型检查与静态构建，然后发布到 GitHub Pages。
4. 访问 **https://YOUR_USERNAME.github.io/**，分别检查首页和 `/en/` 英文页面。

这套流程不需要个人访问令牌、Cookie、外部内容平台授权或 Cloudflare 账号。原始模板仓库的工作流也不会把示例内容发布为维护者的网站。

如果 Pages 尚未开启，先按前述步骤在仓库设置中启用 GitHub Actions 发布源。工作流使用 GitHub 内置的 `pages: write` 和 `id-token: write` 权限，无需自己生成 API Key。

### 4. 本地预览（可选）

需要 Git、Node.js **22.12+** 和 npm。把自己的博客仓库与 Inkerio 放在同一个父目录下：

```bash
mkdir inkerio-workspace && cd inkerio-workspace
git clone https://github.com/ThinkerQAQ/inkerio.git
git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git my-blog
cd inkerio
npm ci
node ../my-blog/scripts/configure-site.mjs --engine .
node scripts/assemble-content.mjs --content-root ../my-blog
npx --no-install astro dev --port 4321
```

打开 http://localhost:4321，看到的就是自己的站点配置与内容，而不是另一套演示博客。

这里需要注意：**不要使用 `npm run dev:quick` 预览自己的文章**，该命令默认装配公开演示模板。修改 Markdown 后重新执行装配命令；正式构建执行 `npm run check` 和 `npm run build`。

### 5. 绑定独立域名（可选）

将 `site.config.json` 的 `url` 改为自己的 HTTPS 域名，再到 **Settings → Pages → Custom domain** 添加域名，并按照 [GitHub 官方自定义域名文档](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site) 设置 DNS。

单独提交 `CNAME` 文件并不能替代 GitHub Pages 的域名设置。第一次建站建议先使用免费的 `username.github.io` 验证整条链路，再考虑迁移域名。

## 仓库之间的关系

| 仓库 | 职责 |
| --- | --- |
| **自己的 `username.github.io`**（由本模板创建） | 文章、站点身份、版权、GitHub Pages 工作流 |
| [Inkerio](https://github.com/ThinkerQAQ/inkerio) | 通用 Astro 博客引擎、内容 Schema、搜索与静态构建 |
| [SyndiRelay](https://github.com/ThinkerQAQ/syndirelay) | **可选**的站外内容分发工具，不参与博客的构建与部署 |
| [ThinkerQAQ.github.io](https://github.com/ThinkerQAQ/ThinkerQAQ.github.io) | **实际生产案例（Live Example）**：包含额外的 Worker 和独立部署流程，并不是要求新用户复制的模板 |

如果以后想将文章同步到其他平台，可以让 SyndiRelay 直接读取这个内容仓库；**无需再创建第二个 `blog-content` 仓库**。

**版权与安全：** 模板骨架、配置与原创文档采用 [MIT](LICENSE)，但演示文章、图片等素材**不自动适用 MIT**，详见 [COPYRIGHT.md](COPYRIGHT.md)。正式发布前应替换示例内容、虚构数据和版权设置；不要将密钥、Cookie、敏感草稿放入公开仓库。
