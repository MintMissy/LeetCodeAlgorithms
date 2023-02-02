// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/typescript
export function binaryArrayToNumber(arr: number[]): number{
	let number = 0;

	for (let i = arr.length - 1; i >= 0; i--) {
		number += Math.pow(2, arr.length - 1 - i) * arr[i]
	}

  return number;
};

// Best solution
export function binaryArrayToNumberr(arr: number[]): number{
  return parseInt(arr.join(""), 2)
};