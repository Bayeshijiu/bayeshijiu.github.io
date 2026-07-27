# Bayes-Blog

基于 [Hexo](https://hexo.io/) + [Butterfly](https://github.com/jerryc127/hexo-theme-butterfly) 的个人博客。

## 站点信息

- **博客地址**：[https://bayesly.me](https://bayesly.me)
- **作者**：八一十九
- **主题**：Butterfly v5
- **评论系统**：Waline
- **部署方式**：GitHub Actions → GitHub Pages

## 本地开发

```bash
# 安装依赖
npm install

# 一键清除缓存并启动本地预览（访问 http://localhost:4000）
npx hexo clean && npx hexo server

# 生成静态文件
npm run build

# 清除缓存
npm run clean
```

## 目录结构

```
source/
├── _data/          # 数据文件（说说等）
├── _posts/         # 博客文章
├── about/          # 关于我
├── img/            # 图片资源
├── message/        # 留言板
├── shuoshuo/       # 说说
└── tags/           # 标签页
```

## 写作

```bash
# 新建文章
npx hexo new "文章标题"

# 新建草稿
npx hexo new draft "文章标题"
```

## 部署

推送到 `master` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。
