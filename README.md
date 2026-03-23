# GitHub Pages 组织站点骨架

这个目录现在已经是一套可以直接部署的纯静态站点，适合放到 GitHub Pages 上作为小组织官网。

## 当前结构

- `index.html`：首页
- `styles.css`：全站样式
- `script.js`：页面动效和年份脚本
- `posts/`：文章页面和模板
- `404.html`：找不到页面时的提示页
- `.nojekyll`：告诉 GitHub Pages 直接发布静态文件

## 你需要先改的内容

全局搜索下面这些占位文本，然后替换成你们自己的信息：

- `组织名`
- `hello@your-org.org`
- `https://github.com/your-org`
- `投稿入口 / 活动报名 / 成员申请`

## 如何继续发内容

1. 复制 `posts/template.html`，改成新的文件名，比如 `posts/first-report.html`
2. 修改文章标题、日期、正文
3. 回到 `index.html`，在“最近发布”区域新增一张卡片并链接到这篇新文章
4. 推送到 GitHub，Pages 会自动更新

## 如何部署到 GitHub Pages

如果这是组织主站，仓库名建议使用：

- `<organization>.github.io`

如果只是项目站点，也可以使用任意仓库名，然后在 Pages 设置里发布该仓库。

常见做法：

1. 把这些文件推送到 GitHub 仓库
2. 打开仓库的 `Settings -> Pages`
3. 在发布来源里选择分支，例如 `main`
4. 文件夹选择 `/ (root)`
5. 保存后等待 GitHub Pages 发布

## 自定义域名

以后如果你们买了域名，可以再加一个 `CNAME` 文件并在 GitHub Pages 设置里绑定自定义域名。

## 下一步可扩展

- 增加“归档”页面
- 增加“成员 / 关于我们”独立页面
- 增加双语页面
- 改成 Markdown 驱动的文章系统
