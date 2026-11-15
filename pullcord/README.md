# PullCord

一根真的会垂下来的拉绳：绳子是 Verlet 物理模拟，会受重力下垂、被甩动、自己停稳。往下拉过一定深度就触发一次（这里用来切换明暗主题），点击和回车也可以。

**在线预览：** https://a2751012962.github.io/web-effects/pullcord/

## 来源与许可

- 组件：npm 包 [`pullcord`](https://www.npmjs.com/package/pullcord) 0.1.0，源码 [github.com/mortspace/pullcord](https://github.com/mortspace/pullcord)
- 作者：Sarthak Navalekar（mortspace），原演示 [feralui.dev/pullcord](https://feralui.dev/pullcord)
- 许可：**MIT**（见 `LICENSE-pullcord.txt`）；依赖的 motion 也是 MIT（见 `LICENSE-motion.txt`）
- `src/` 里的演示页是本仓库自己写的，不是原站的演示页

## 文件

| 文件 | 说明 |
| --- | --- |
| `index.html` | 页面入口 |
| `src/main.jsx`、`src/demo.css` | 演示页源码 |
| `app.js`、`app.css` | 打包产物（含 React、motion 和组件），由根目录 `npm run build` 生成 |
| `preview.jpg` | 画廊缩略图 |

## 在自己的项目里用

```bash
npm install pullcord
```

```jsx
import { PullCord } from 'pullcord'
import 'pullcord/pullcord.css'

const [dark, setDark] = useState(true)

<PullCord onPull={() => setDark(d => !d)} pulled={!dark} ariaLabel="Toggle theme" />
```

放在哪里都行，它会自己固定在视口顶部。位置和颜色用 CSS 变量调：

```css
:root {
  --pullcord-top: 0px;
  --pullcord-right: 7rem;
  --pullcord-ink: rgba(255, 255, 255, 0.24);
}
```

手感用 `config` 调：`gravity`（重力）、`damping`（阻尼）、`iterations`（绳子硬度）、`stretchMax`（可拉深度）等。
