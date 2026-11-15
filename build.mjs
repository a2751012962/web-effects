// 把每个带 src/main.jsx 的特效文件夹打包成 app.js + app.css（React 等依赖一起打进去），
// 这样 GitHub Pages 不需要构建步骤就能直接托管。
//   node build.mjs            打包全部
//   node build.mjs fur blinds 只打包指定的
import { build } from 'esbuild'
import { copyFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

// 需要随打包产物一起分发的许可证文件：特效文件夹 -> [npm 包里的文件, 输出文件名]
const LICENSES = {
  fur: [['feral-fur/LICENSE', 'LICENSE-feral-fur.txt']],
  blinds: [['feral-blinds/LICENSE', 'LICENSE-feral-blinds.txt']],
  pullcord: [
    ['pullcord/LICENSE', 'LICENSE-pullcord.txt'],
    ['motion/LICENSE.md', 'LICENSE-motion.txt'],
  ],
}

const wanted = process.argv.slice(2)
const effects = readdirSync('.', { withFileTypes: true })
  .filter(d => d.isDirectory() && existsSync(join(d.name, 'src', 'main.jsx')))
  .map(d => d.name)
  .filter(name => !wanted.length || wanted.includes(name))

for (const name of effects) {
  await build({
    entryPoints: [join(name, 'src', 'main.jsx')],
    outfile: join(name, 'app.js'),
    bundle: true,
    minify: true,
    format: 'iife',
    target: 'es2020',
    jsx: 'automatic',
    define: { 'process.env.NODE_ENV': '"production"' },
    legalComments: 'eof',
    logLevel: 'warning',
  })
  for (const [from, to] of LICENSES[name] ?? []) {
    copyFileSync(join('node_modules', from), join(name, to))
  }
  console.log(`built ${name}/app.js`)
}
