// https://www.codewars.com/kata/513e08acc600c94f01000001/train/typescript
export function rgb(r: number, g: number, b: number): string {
	return convert(r) + convert(g) + convert(b);
}

function convert(number: number) {
	return minHexDigits(convertToHex(number > 255 ? 255 : number));
}

const hexCharacterMap: { [key: number]: string } = {
	10: "A",
	11: "B",
	12: "C",
	13: "D",
	14: "E",
	15: "F",
};

function minHexDigits(hex: string, minDigits = 2) {
	return hex.padStart(minDigits, "0");
}

function convertToHex(number: number): string {
	let hex = "";
	while (number > 0) {
		const reminder = number % 16;
		const code = reminder <= 9 ? String(reminder) : hexCharacterMap[reminder];
		hex = code + hex;
		number = Math.floor(number / 16);
	}
	return hex;
}

// best solution
function dig(n: number): string {
	return (n > 255 ? 255 : n < 0 ? 0 : n).toString(16).toUpperCase().padStart(2, "0");
}