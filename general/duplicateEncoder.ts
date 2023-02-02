// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript
export function duplicateEncode(word: string) {
	const letterCount = getLetterCount(word);
	let encoded = "";

	for (const letter of word) {
		encoded += letterCount[letter.toLocaleLowerCase()] > 1 ? ")" : "(";
	}
	return encoded;
}

function getLetterCount(word: string) {
	const count: { [key: string]: number } = {};
	word.split("").forEach((letter) => {
		letter = letter.toLocaleLowerCase();

		if (count[letter] !== undefined) {
			count[letter] += 1;
		} else {
			count[letter] = 1;
		}
	});
	return count;
}

// Cool solution
export function duplicateEncodee(word: string){
  const letters = word.toLowerCase().split("")
  return letters.reduce((t,c) => t + (letters.filter(ch => ch === c).length > 1 ? ")" : "("), "")
}