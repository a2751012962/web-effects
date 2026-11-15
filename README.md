# 特效收藏（web-effects）

收藏的网页特效合集。每个特效一个文件夹，可以独立打开；根目录是画廊首页。

**在线预览：** https://a2751012962.github.io/web-effects/

## 特效列表

| 特效 | 预览 | 原作 | 许可 |
| --- | --- | --- | --- |
| [Fur](fur/) | [打开](https://a2751012962.github.io/web-effects/fur/) | [feral-fur](https://www.npmjs.com/package/feral-fur) · Sarthak Navalekar | MIT |
| [PullCord](pullcord/) | [打开](https://a2751012962.github.io/web-effects/pullcord/) | [pullcord](https://www.npmjs.com/package/pullcord) · Sarthak Navalekar | MIT |
| [Blinds](blinds/) | [打开](https://a2751012962.github.io/web-effects/blinds/) | [feral-blinds](https://www.npmjs.com/package/feral-blinds) · Sarthak Navalekar | MIT |
| [Neon 3D Tubes Cursor Trail](neon-3d-tubes-cursor-trail/) | [打开](https://a2751012962.github.io/web-effects/neon-3d-tubes-cursor-trail/) | [Kevin Levron (soju22)](https://codepen.io/soju22/pen/qEbdVjK) | CC BY-NC-SA 4.0 |

### 外链收藏（只存链接，不含代码）

这些作品的作者没有开放源码，[FeralUI 的条款](https://feralui.dev/terms)写明未发布成 npm 包的演示「不得复制或再分发」，所以只在画廊里放了指向原站的卡片。

| 特效 | 原站 |
| --- | --- |
| Gradient Builder | https://feralui.dev/gradients |
| Nudge | https://feralui.dev/nudge |
| Hologram | https://feralui.dev/hologram |

## 加一个新特效

**纯静态特效**（HTML / CSS / JS，例如 CodePen 上的作品）：

1. 新建文件夹 `<特效名>/`，放入 `index.html`（及它用到的 css / js / 依赖）。
2. 截一张图存为 `<特效名>/preview.jpg`，作为画廊缩略图。
3. 在 `effects.js` 数组最前面加一条记录（`slug` 要等于文件夹名）。
4. 在上面的「特效列表」加一行，然后提交推送 —— GitHub Pages 会自动更新。

**React 组件类特效**（例如 npm 包）：

1. `npm install -D <包名>`。
2. 新建 `<特效名>/index.html`（引用 `app.css` 和 `app.js`）和 `<特效名>/src/main.jsx`（演示页源码）。
3. `npm run build` —— `build.mjs` 会把每个 `*/src/main.jsx` 连同 React 打包成同目录下的 `app.js` + `app.css`。
4. 之后同上：截图、加 `effects.js` 记录、提交推送（打包产物要一起提交，Pages 不会替你构建）。

**作者没有开放源码的**：只在 `effects.js` 里加一条带 `url` 的外链记录，不要复制代码。

## 本地运行

页面用了 ES Module，不能直接双击打开，需要起一个本地静态服务器：

```bash
python -m http.server 8000
```

然后访问 http://localhost:8000

改了某个 React 演示页的 `src/` 之后重新打包：

```bash
npm install
```

```bash
npm run build
```

## 许可说明

这里的特效都来自各自的原作者，**各自沿用原作的许可证**（见每个特效文件夹里的 README / LICENSE 文件和上表），使用前请先看清楚 —— 例如标注 NC 的不能商用。

React 演示页的打包产物（`app.js`）里包含 React、react-dom（MIT，Meta）等第三方代码，许可声明保留在文件末尾；`pullcord/` 另含 motion（MIT）。各演示页的 `src/` 是本仓库自己写的演示外壳。
