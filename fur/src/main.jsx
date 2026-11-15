// 演示页：feral-fur（MIT，作者 Sarthak Navalekar / mortspace）
// https://www.npmjs.com/package/feral-fur · https://github.com/mortspace/fur
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Fur } from 'feral-fur'
import 'feral-fur/fur.css'
import './demo.css'

const SHAPES = [
  { id: 'folder', label: '文件夹', ratio: '29 / 24' },
  { id: 'heart', label: '爱心', ratio: '1 / 1' },
  { id: 'card', label: '卡片', ratio: '4 / 3' },
  { id: 'text', label: '文字', ratio: '10 / 3' },
]

const COLORS = ['#f5a8c9', '#f2b25c', '#8fc7a4', '#8fb3f0', '#b9a2ee', '#e9e4d8', '#3a3536']

function Slider({ label, value, min, max, step, onChange }) {
  return (
    <label className="row">
      <span>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
      <output>{value.toFixed(2)}</output>
    </label>
  )
}

function App() {
  const [shape, setShape] = useState('folder')
  const [color, setColor] = useState(COLORS[0])
  const [text, setText] = useState('feral')
  const [fluff, setFluff] = useState(1)
  const [density, setDensity] = useState(1)
  const [mess, setMess] = useState(0.5)

  const current = SHAPES.find(s => s.id === shape)
  const isText = shape === 'text'
  const target = isText ? { text: text || ' ' } : { shape }

  return (
    <main>
      <header>
        <h1>Fur</h1>
        <p>用鼠标或手指在上面划过去，毛会被拨开，再慢慢弹回来。</p>
      </header>

      <div className="stage">
        <Fur
          {...target}
          color={color}
          fluff={fluff}
          density={density}
          mess={mess}
          style={{ width: isText ? 'min(560px, 82vw)' : 'min(360px, 70vw)', aspectRatio: current.ratio }}
        />
      </div>

      <section className="panel" aria-label="参数">
        <div className="chips" role="group" aria-label="形状">
          {SHAPES.map(s => (
            <button key={s.id} className={s.id === shape ? 'on' : ''} onClick={() => setShape(s.id)}>
              {s.label}
            </button>
          ))}
        </div>

        {isText && (
          <label className="row">
            <span>文字</span>
            <input type="text" value={text} maxLength={12} onChange={e => setText(e.target.value)} />
          </label>
        )}

        <div className="row">
          <span>颜色</span>
          <div className="swatches">
            {COLORS.map(c => (
              <button
                key={c}
                className={c === color ? 'swatch on' : 'swatch'}
                style={{ background: c }}
                aria-label={`颜色 ${c}`}
                onClick={() => setColor(c)}
              />
            ))}
            <input type="color" value={color} aria-label="自定义颜色" onChange={e => setColor(e.target.value)} />
          </div>
        </div>

        <Slider label="长度" value={fluff} min={0.4} max={2} step={0.05} onChange={setFluff} />
        <Slider label="密度" value={density} min={0.3} max={2} step={0.05} onChange={setDensity} />
        <Slider label="凌乱" value={mess} min={0} max={1} step={0.05} onChange={setMess} />
      </section>

      <footer>
        组件 <a href="https://www.npmjs.com/package/feral-fur" target="_blank" rel="noopener">feral-fur</a> ·
        作者 <a href="https://github.com/mortspace/fur" target="_blank" rel="noopener">Sarthak Navalekar</a> · MIT ·
        原演示 <a href="https://feralui.dev/fur" target="_blank" rel="noopener">feralui.dev/fur</a>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
