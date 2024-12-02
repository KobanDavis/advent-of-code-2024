import parseInput from 'lib/parseInput'

const input = await parseInput()

const check = (row: number[]) => {
	let last = row.shift()
	let asc: boolean
	for (let i = 0; i < row.length; i++) {
		const isAsc = last < row[i]
		const diff = last - row[i]
		if (asc === undefined) asc = isAsc
		if (Math.abs(diff) > 3 || diff === 0 || asc !== isAsc) {
			return false
		}
		last = row[i]
	}
	return true
}

let total = 0
for (const s of input) {
	const row = s.split(' ').map(Number)
	const isSafe = row
		.map((_, i, row) => {
			const slice = [...row]
			slice.splice(i, 1)
			return slice
		}, [])
		.some(check)
	if (isSafe) total++
}

console.log(total)
