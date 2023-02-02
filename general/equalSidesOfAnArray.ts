// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/typescript
export function findEvenIndex(arr: number[]): number {
	for (let i = 0; i < arr.length; i++) {
		if (sumArray(arr.slice(0, i)) === sumArray(arr.slice(i + 1, arr.length))) {
			return i
		}
	}

	return -1;
}

function sumArray(array:number[]) {
	return array.reduce((sum, current) => sum + current, 0)
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

