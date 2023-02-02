// https://www.codewars.com/kata/55aa075506463dac6600010d/train/typescript
export const listSquared = (m: number, n: number): number[][] => {
	const results: number[][] = [];
	for (let i = m; i <= n; i++) {
		const divisors = getDivisors(i);
		const squaredDivisorsSum = getSquaredDivisorsSum(divisors);

		if (Math.sqrt(squaredDivisorsSum) % 1 === 0) {
			results.push([i, squaredDivisorsSum]);
		}
	}
	return results;
};

function getSquaredDivisorsSum(divisors: number[]) {
	return divisors.map((divisor) => Math.pow(divisor, 2)).reduce((sum, divisor) => sum + divisor, 0);
}

function getDivisors(number: number) {
	if (number === 1) {
		return [1];
	}

	const divisors = [1, number];
	const squaredNumber = Math.sqrt(number);

	if (squaredNumber % 1 === 0) {
		divisors.push(squaredNumber);
	}

	for (let i = 2; i < squaredNumber; i++) {
		if (number % i === 0) {
			divisors.push(i);
			divisors.push(number / i);
		}
	}

	return divisors;
}
