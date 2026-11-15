# Blinds

装在真实弹簧上的轮播。悬停一片叶片，它带着一点回弹展开，邻居被挤到一边。同一套弹簧内核有九种布局：strip、reel、ring、snap、stack、deck、fan、fold、peek。

**在线预览：** https://a2751012962.github.io/web-effects/blinds/

## 来源与许可

- 组件：npm 包 [`feral-blinds`](https://www.npmjs.com/package/feral-blinds) 0.3.1
- 作者：Sarthak Navalekar（mortspace），原演示 [feralui.dev/blinds](https://feralui.dev/blinds)
- 许可：**MIT**（见 `LICENSE-feral-blinds.txt`）
- `src/` 里的演示页是本仓库自己写的，不是原站的演示页；没有用原站的照片，卡面是组件按 `hue` 生成的渐变

## 文件

| 文件 | 说明 |
| --- | --- |
| `index.html` | 页面入口 |
| `src/main.jsx`、`src/demo.css` | 演示页源码 |
| `app.js`、`app.css` | 打包产物（含 React 和组件），由根目录 `npm run build` 生成 |
| `preview.jpg` | 画廊缩略图 |

## 在自己的项目里用

```bash
npm i feral-blinds
```

```jsx
import { Blinds } from 'feral-blinds'
import 'feral-blinds/blinds.css'

<div style={{ height: 480 }}>
  <Blinds
    items={projects.map(p => ({ title: p.name, subtitle: p.oneLiner, meta: p.year, image: p.cover }))}
    mode="strip"
    autoPlay={3400}
    onActivate={i => navigate(projects[i].href)}
  />
</div>
```

注意：

- 外层要有**确定的高度**，组件会填满它（放在 `flex: 1` 这类高度不确定的容器里会塌成 0）。
- 不带 `image` 的条目会按 `hue` 生成渐变图；但 `peek` 布局不会，它需要真的图片。
- 深浅配色跟随 `<html data-theme="light">`。

常用参数：`mode`、`direction`、`expandRatio`、`shape`、`labelStyle`、`autoPlay`、`interaction`（`hover` / `scrub`）。完整列表见包的 README。
