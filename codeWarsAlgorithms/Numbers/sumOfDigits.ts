export const digitalRoot = (n:number):number => {
	const sum = String(n).split('').reduce((acc, digit) => acc + parseInt(digit), 0)
	return sum > 9 ? digitalRoot(sum) : sum
};
