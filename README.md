# IVY 187 网站

这个目录是一套已经上线到 GitHub Pages 的纯静态站点，用作 `IVY 187` 的公开首页。

## 当前结构

- `index.html`：首页
- `styles.css`：全站样式
- `script.js`：页面动效和年份脚本
- `assets/`：品牌标识等静态资源
- `posts/`：文章页面和模板
- `404.html`：找不到页面时的提示页
- `.nojekyll`：告诉 GitHub Pages 直接发布静态文件

## 如何继续发内容

1. 复制 `posts/template.html`，改成新的文件名，比如 `posts/first-report.html`
2. 修改文章标题、日期、正文
3. 回到 `index.html`，在相应内容区域新增一张卡片并链接到这篇新文章
4. 推送到 GitHub，Pages 会自动更新

## 下一步可扩展

- 增加“归档”页面
- 增加“成员 / 主理人”独立页面
- 增加双语页面
- 改成 Markdown 驱动的文章系统
