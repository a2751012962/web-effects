// 演示页：pullcord（MIT，作者 Sarthak Navalekar / mortspace）
// https://www.npmjs.com/package/pullcord · https://github.com/mortspace/pullcord
import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { PullCord, DEFAULT_CONFIG } from 'pullcord'
import 'pullcord/pullcord.css'
import './demo.css'

const KNOBS = [
  { key: 'gravity', label: '重力', min: 400, max: 2400, step: 50 },
  { key: 'damping', label: '阻尼', min: 0.85, max: 0.99, step: 0.005 },
  { key: 'iterations', label: '硬度', min: 4, max: 40, step: 1 },
  { key: 'stretchMax', label: '可拉深度', min: 12, max: 60, step: 1 },
]

function App() {
  const [dark, setDark] = useState(true)
  const [pulls, setPulls] = useState(0)
  const [config, setConfig] = useState({})

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  const value = key => config[key] ?? DEFAULT_CONFIG[key]

  return (
    <>
      <PullCord
        onPull={() => {
          setDark(d => !d)
          setPulls(n => n + 1)
        }}
        pulled={!dark}
        ariaLabel="切换明暗主题"
        config={config}
      />

      <main>
        <p className="kicker">{dark ? '灯关着' : '灯开着'}</p>
        <h1>Pull the cord</h1>
        <p className="lead">抓住上方垂下来的拉绳往下拉，拉过一定深度就会「咔哒」一下切换明暗。也可以甩它。</p>
        <p className="count">已拉 {pulls} 次</p>

        <section className="panel" aria-label="物理参数">
          {KNOBS.map(k => (
            <label className="row" key={k.key}>
              <span>{k.label}</span>
              <input
                type="range"
                min={k.min}
                max={k.max}
                step={k.step}
                value={value(k.key)}
                onChange={e => setConfig(c => ({ ...c, [k.key]: Number(e.target.value) }))}
              />
              <output>{value(k.key)}</output>
            </label>
          ))}
          <button className="reset" onClick={() => setConfig({})}>恢复默认</button>
        </section>
      </main>

      <footer>
        组件 <a href="https://www.npmjs.com/package/pullcord" target="_blank" rel="noopener">pullcord</a> ·
        作者 <a href="https://github.com/mortspace/pullcord" target="_blank" rel="noopener">Sarthak Navalekar</a> · MIT ·
        原演示 <a href="https://feralui.dev/pullcord" target="_blank" rel="noopener">feralui.dev/pullcord</a>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
