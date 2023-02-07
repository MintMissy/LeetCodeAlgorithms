const romanNumbers: { [key: string]: number } = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

export function solution(roman: string): number {
	console.log("---------");

	let parsedNumber = 0;

	let previousCharacter = "";
	let previousSum = 0;

	for (const romanNumber of roman) {
		const currentParsed = romanNumbers[romanNumber];

		if (previousCharacter === romanNumber || previousCharacter === "") {
			previousSum += currentParsed;
			previousCharacter = romanNumber;
			continue;
		}

		if (currentParsed > previousSum) {
			parsedNumber += currentParsed - previousSum;
		} else {
			parsedNumber += previousSum + currentParsed;
		}

		previousSum = 0;
		previousCharacter = romanNumber;
	}

	return parsedNumber + previousSum;
}

