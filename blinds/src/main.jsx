// 演示页：feral-blinds（MIT，作者 Sarthak Navalekar / mortspace）
// https://www.npmjs.com/package/feral-blinds
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Blinds } from 'feral-blinds'
import 'feral-blinds/blinds.css'
import './demo.css'

// 不带 image 的条目会由组件按 hue 生成渐变图，所以这里不需要任何图片素材。
const ITEMS = [
  { title: 'Dawn', subtitle: '清晨的第一道光', meta: '01', hue: 18 },
  { title: 'Citrus', subtitle: '切开的橙子', meta: '02', hue: 42 },
  { title: 'Moss', subtitle: '雨后的石阶', meta: '03', hue: 128 },
  { title: 'Lagoon', subtitle: '浅水的颜色', meta: '04', hue: 176 },
  { title: 'Harbor', subtitle: '傍晚的码头', meta: '05', hue: 212 },
  { title: 'Iris', subtitle: '鸢尾花田', meta: '06', hue: 262 },
  { title: 'Orchid', subtitle: '温室的角落', meta: '07', hue: 302 },
  { title: 'Ember', subtitle: '快熄的炭火', meta: '08', hue: 348 },
]

// peek 布局是围绕「照片在框里漂移」设计的，不会给无图条目生成渐变，
// 所以这个布局下用 hue 现画一张 SVG 渐变当图片。
const art = hue =>
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">` +
      `<defs>` +
      `<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
      `<stop offset="0" stop-color="hsl(${hue} 80% 72%)"/>` +
      `<stop offset="1" stop-color="hsl(${(hue + 50) % 360} 60% 32%)"/>` +
      `</linearGradient>` +
      `<radialGradient id="r" cx=".75" cy=".2" r=".7">` +
      `<stop offset="0" stop-color="hsl(${(hue + 320) % 360} 90% 80%)" stop-opacity=".9"/>` +
      `<stop offset="1" stop-color="hsl(${hue} 80% 60%)" stop-opacity="0"/>` +
      `</radialGradient>` +
      `</defs>` +
      `<rect width="100%" height="100%" fill="url(#g)"/>` +
      `<rect width="100%" height="100%" fill="url(#r)"/>` +
      `</svg>`,
  )
const ITEMS_WITH_ART = ITEMS.map(item => ({ ...item, image: art(item.hue) }))

const MODES = [
  { id: 'strip', label: 'Strip', hint: '悬停展开一片，邻居被挤开；点击可固定。' },
  { id: 'reel', label: 'Reel', hint: '自己缓缓漂移、无限循环的传送带，可以拖。' },
  { id: 'ring', label: 'Ring', hint: '卡片贴在一个转动的圆筒上，拖动旋转。' },
  { id: 'snap', label: 'Snap', hint: '经典的居中轮播，甩一下可以跳过几张。' },
  { id: 'stack', label: 'Stack', hint: '一叠卡片，把最上面那张甩出去。' },
  { id: 'deck', label: 'Deck', hint: '扇开的一摞，滑动把顶牌发出去再塞回底部。' },
  { id: 'fan', label: 'Fan', hint: '像手里握着的一把牌。' },
  { id: 'fold', label: 'Fold', hint: '中间一张平铺，两侧折叠，用箭头和圆点翻页。' },
  { id: 'peek', label: 'Peek', hint: '一次一张主卡，左右邻居在边缘探头。' },
]

function App() {
  const [mode, setMode] = useState('strip')
  const [autoPlay, setAutoPlay] = useState(false)
  const current = MODES.find(m => m.id === mode)

  return (
    <main>
      <header>
        <h1>Blinds</h1>
        <p>装在真实弹簧上的轮播，一个组件九种布局。</p>
        <div className="chips" role="group" aria-label="布局">
          {MODES.map(m => (
            <button key={m.id} className={m.id === mode ? 'on' : ''} onClick={() => setMode(m.id)}>
              {m.label}
            </button>
          ))}
          <label className="toggle">
            <input type="checkbox" checked={autoPlay} onChange={e => setAutoPlay(e.target.checked)} />
            自动播放
          </label>
        </div>
        <p className="hint">{current.hint}</p>
      </header>

      <div className="stage">
        {/* key 让切换布局时整个组件重新挂载，弹簧状态从头开始 */}
        <Blinds key={mode} items={mode === 'peek' ? ITEMS_WITH_ART : ITEMS} mode={mode} autoPlay={autoPlay ? 3200 : false} />
      </div>

      <footer>
        组件 <a href="https://www.npmjs.com/package/feral-blinds" target="_blank" rel="noopener">feral-blinds</a> ·
        作者 Sarthak Navalekar · MIT ·
        原演示 <a href="https://feralui.dev/blinds" target="_blank" rel="noopener">feralui.dev/blinds</a>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
