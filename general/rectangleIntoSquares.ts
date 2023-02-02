// https://www.codewars.com/kata/55466989aeecab5aac00003e/train/typescript
export const sqInRect = (l: number, w: number): null | number[] => {
	if (l === w) {
		return null;
	}
	const [short, long] = l < w ? [l, w] : [w, l];
	const inChild = sqInRect(long - short, short);

	let result: number[] | null;
	if (long === short) {
		result = [short];
	} else {
		result = [short, ...(inChild === null ? [short] : inChild)];
	}

	return result;
};

console.log(sqInRect(5, 5));
console.log(sqInRect(5, 3));
