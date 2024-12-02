// holy hell am i lazy

import fs from 'node:fs/promises'
import path from 'node:path'

import { execSync } from 'node:child_process'

const dirs = await fs.readdir('src')
const nextDay = (dirs.length ? dirs.map(Number).sort().pop() + 1 : 1).toString()
const dayPath = path.resolve(process.cwd(), `./src/${nextDay.padStart(2, '0')}`)

await fs.mkdir(dayPath)
await fs.writeFile(dayPath + '/1.ts', '')
execSync(`code ${dayPath}/1.ts`)

fs.writeFile(dayPath + '/2.ts', '')
fs.writeFile(dayPath + '/input.txt', '')

console.log(`Time to fail day ${nextDay}`)
console.log(`https://adventofcode.com/2024/day/${nextDay}`)
