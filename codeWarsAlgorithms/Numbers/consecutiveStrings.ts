// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/typescript
export function longestConsec(strarr: string[], k: number): string {
	const mapped: string[] = [];

	for (let i = 0; i < strarr.length - k + 1; i++) {
		let mappedString = "";

		for (let j = 0; j < k; j++) {
			mappedString += strarr[i + j];
		}
		mapped.push(mappedString);
	}

	return mapped.reduce((acc, cur) => (acc.length >= cur.length ? acc : cur), "");
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
