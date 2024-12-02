import parseInput from 'lib/parseInput'

const input = await parseInput()

const left: number[] = []

const right: Record<number, number> = {}

input.forEach((pair) => {
	const [l, r] = pair.split('   ').map(Number)
	left.push(l)
	right[r] = r in right ? right[r] + 1 : 1
})

let total = 0
for (let i = 0; i < left.length; i++) {
	const l = left[i]
	const o = right[l] || 0
	total += l * o
}

console.log(total)
