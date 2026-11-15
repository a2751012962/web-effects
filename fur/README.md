# Fur

在 canvas 上一根一根画出来的毛皮。鼠标或手指划过去，毛会被拨开，再弹回来。

**在线预览：** https://a2751012962.github.io/web-effects/fur/

## 来源与许可

- 组件：npm 包 [`feral-fur`](https://www.npmjs.com/package/feral-fur) 0.1.1，源码 [github.com/mortspace/fur](https://github.com/mortspace/fur)
- 作者：Sarthak Navalekar（mortspace），原演示 [feralui.dev/fur](https://feralui.dev/fur)
- 许可：**MIT**（见 `LICENSE-feral-fur.txt`）
- `src/` 里的演示页（参数面板等）是本仓库自己写的，不是原站的演示页

## 文件

| 文件 | 说明 |
| --- | --- |
| `index.html` | 页面入口 |
| `src/main.jsx`、`src/demo.css` | 演示页源码 |
| `app.js`、`app.css` | 打包产物（含 React 和组件），由根目录 `npm run build` 生成 |
| `preview.jpg` | 画廊缩略图 |

## 在自己的项目里用

```bash
npm i feral-fur
```

```jsx
import { Fur } from 'feral-fur'
import 'feral-fur/fur.css'

<Fur shape="heart" color="#f5a8c9" style={{ width: 320, aspectRatio: '1 / 1' }} />
<Fur text="feral" style={{ width: 420, aspectRatio: '10 / 3' }} />
```

元素的宽高决定毛皮大小；毛的边缘会故意伸出盒子，四周留点空间，不要加 `overflow: hidden`。

主要参数：`shape`（`folder` / `card` / `heart`）、`path`（自定义 SVG 路径）、`text`、`color`、`fluff`（长度）、`density`（密度）、`mess`（凌乱度 0–1）、`pettable`。完整列表见包的 README。
