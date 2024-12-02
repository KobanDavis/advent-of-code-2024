import parseInput from 'lib/parseInput'

const input = await parseInput()

let total = input.length
for (const s of input) {
	const row = s.split(' ').map(Number)
	let last = row.shift()
	let asc: boolean
	for (let i = 0; i < row.length; i++) {
		const isAsc = last < row[i]
		const diff = last - row[i]
		if (asc === undefined) asc = isAsc
		if (Math.abs(diff) > 3 || diff === 0 || asc !== isAsc) {
			total--
			break
		}
		last = row[i]
	}
}

console.log(total)
