# 百度搜索广告关键词拓展工具 GitHub Pages 静态版

这是不需要服务器、不需要银行卡的纯前端版本，适合直接上传到 GitHub Pages。

## 上传 GitHub

把当前文件夹里的这些文件上传到 GitHub 仓库根目录：

```text
index.html
styles.css
app.js
README.md
```

## 开启 GitHub Pages

1. 进入 GitHub 仓库
2. 点击 `Settings`
3. 左侧点击 `Pages`
4. `Source` 选择 `Deploy from a branch`
5. `Branch` 选择 `main`
6. 文件夹选择 `/root`
7. 点击 `Save`

GitHub 会生成类似这样的地址：

```text
https://你的用户名.github.io/仓库名/
```

## 说明

这个版本没有 Node 后端，关键词拓展逻辑在浏览器里本地运行，因此可以免费托管在 GitHub Pages。
