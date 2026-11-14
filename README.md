# Neon 3D Tubes Cursor Trail

跟随鼠标移动的霓虹 3D 管道特效（Three.js）。移动鼠标拖出发光管道，点击页面随机切换颜色。

**在线预览：** https://a2751012962.github.io/neon-3d-tubes-cursor-trail/

## 来源与许可

- 原作：[Neon 3D Tubes Cursor Trail](https://codepen.io/soju22/pen/qEbdVjK)，作者 Kevin Levron（[soju22](https://codepen.io/soju22)）
- 发现于：[freefrontend.com/three-js](https://freefrontend.com/three-js/#2026-02-05-neon-3d-tubes-cursor-trail-l)
- 特效代码许可：**CC BY-NC-SA 4.0** —— 需署名、**禁止商用**、衍生作品须以相同许可分享
- `vendor/tubes1.min.js` 来自 npm 包 [`threejs-components@0.0.19`](https://www.npmjs.com/package/threejs-components)（内含 Three.js，MIT）

本仓库只是把原作保存为可独立运行的静态页面，改动仅限于：补全 HTML 外壳、把依赖库从 CDN 改为本地文件。

## 文件

| 文件 | 说明 |
| --- | --- |
| `index.html` | 页面结构 |
| `style.css` | 样式（与原作一致） |
| `script.js` | 特效初始化与点击换色 |
| `vendor/tubes1.min.js` | 特效库（本地副本） |

## 本地运行

脚本是 ES Module，不能直接双击 `index.html` 打开，需要起一个本地静态服务器：

```bash
python -m http.server 8000
```

然后访问 http://localhost:8000

## 自定义

在 `script.js` 里改 `colors`（管道颜色，3 个）和 `lights.colors`（灯光颜色，4 个）、`lights.intensity`（亮度）。

想用在自己的页面里：保留 `<canvas id="canvas">` 和 `#canvas` 的固定定位样式，引入 `script.js` 即可，`.hero` 里的文字可以随意替换。
