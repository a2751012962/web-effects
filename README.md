# 特效收藏（web-effects）

收藏的网页特效合集。每个特效一个文件夹，可以独立打开；根目录是画廊首页。

**在线预览：** https://a2751012962.github.io/web-effects/

## 特效列表

| 特效 | 预览 | 原作 | 许可 |
| --- | --- | --- | --- |
| [Neon 3D Tubes Cursor Trail](neon-3d-tubes-cursor-trail/) | [打开](https://a2751012962.github.io/web-effects/neon-3d-tubes-cursor-trail/) | [Kevin Levron (soju22)](https://codepen.io/soju22/pen/qEbdVjK) | CC BY-NC-SA 4.0 |

## 加一个新特效

1. 新建文件夹 `<特效名>/`，放入 `index.html`（及它用到的 css / js / 依赖）。
2. 截一张图存为 `<特效名>/preview.jpg`，作为画廊缩略图。
3. 在 `effects.js` 数组最前面加一条记录（`slug` 要等于文件夹名）。
4. 在上面的「特效列表」加一行，然后提交推送 —— GitHub Pages 会自动更新。

## 本地运行

页面用了 ES Module，不能直接双击打开，需要起一个本地静态服务器：

```bash
python -m http.server 8000
```

然后访问 http://localhost:8000

## 许可说明

这里的特效都来自各自的原作者，**各自沿用原作的许可证**（见每个特效文件夹里的 README 和上表），使用前请先看清楚 —— 例如标注 NC 的不能商用。
