const data = {
	from : {
		x : 4,
		y : 6,
	},
	to : {
		x : 4,
		y : 4,
	}
}

const alph = {
	0 : 'A',
	1 : 'B',
	2 : 'C',
	3 : 'D',
	4 : 'E',
	5 : 'F',
	6 : 'G',
	7 : 'H',
}

const alphReverse = {
	'A' : 0,
	'B' : 1,
	'C' : 2,
	'D' : 3,
	'E' : 4,
	'F' : 5,
	'G' : 6,
	'H' : 7,
}

export function encodeMove(data) {
	let from = alph[data.from.x] + (8 - data.from.y);
	let to = alph[data.to.x] + (8 - data.to.y);
	let res = from + ':' + to;
	return res;
}

export function decodeMove(str) {
	let arr = str.split(':');
	const res = {
		from : {
			x : alphReverse[arr[0][0]],
			y : 8 - arr[0][1],
		},
		to : {
			x : alphReverse[arr[1][0]],
			y : 8 - arr[1][1],
		}
	}

	return res;
}