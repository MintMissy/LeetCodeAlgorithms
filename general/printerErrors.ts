// https://www.codewars.com/kata/56541980fa08ab47a0000040/solutions/typescript
export function printerError(s: string): string {
	const invalidLetters = s.split("").reduce((prev, curr) => prev + (curr.charCodeAt(0) > 109 ? 1 : 0), 0);
	return `${invalidLetters}/${s.length}`;
}
