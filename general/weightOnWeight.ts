// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/typescript
export function orderWeight(strng: string): string {
	const list = strng.split(' ')
	return list.sort((a,b) => {
		const sumA = sumDigits(a);
		const sumB = sumDigits(b);
		if (sumA === sumB) {
			return a > b ? 1 : -1
		}

		return sumA > sumB ? 1 : -1
	}).join(' ')
}

function sumDigits(string:string) {
	return string.split('').reduce((sum, current) => sum + parseInt(current), 0)
}