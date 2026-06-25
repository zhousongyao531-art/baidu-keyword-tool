# 百度搜索广告关键词拓展工具 GitHub Pages 半真实版

这是不需要服务器、不需要银行卡的前端版本，适合直接上传到 GitHub Pages。

## 数据来源

- `百度联想词`：通过百度搜索建议接口获取真实搜索联想词，属于真实用户搜索输入场景的参考数据。
- `AI智能拓词 / 竞品词 / 行业词库 / 同义词 / 热门趋势 / 问答平台 / 电商平台`：仍然是浏览器本地规则模板生成，用于补充数量和覆盖更多意图。
- 如果百度联想词接口临时失败、被浏览器限制或返回数量不足，工具会自动使用本地规则补足结果。

注意：这个版本没有接入百度营销广告后台 API，因此不包含搜索量、竞争度、点击价格、账户投放表现等广告后台指标。

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
