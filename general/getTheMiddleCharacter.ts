// https://www.codewars.com/kata/56747fd5cb988479af000028/train/typescript
export function getMiddle(s:string) {
	const halfLength = Math.floor(s.length / 2);

	if (s.length % 2 !== 0) {
		return s[Math.floor(halfLength)]
	}else{
		return s.slice(Math.floor(halfLength - 1), halfLength + 1)
	}
}

// Better solution
export function getMiddlee(s:string) {
  const middle = Math.ceil(s.length / 2) - 1
  return s.slice(middle, s.length - middle)
}