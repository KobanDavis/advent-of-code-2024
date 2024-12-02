import parseInput from 'lib/parseInput'

const input = await parseInput()

const left: number[] = []
const right: number[] = []

input.forEach((pair) => {
	const [l, r] = pair.split('   ')
	left.push(+l)
	right.push(+r)
})

left.sort()
right.sort()

let total = 0
for (let i = 0; i < left.length; i++) {
	const l = left[i]
	const r = right[i]
	total += Math.abs(r - l)
}

console.log(total)
