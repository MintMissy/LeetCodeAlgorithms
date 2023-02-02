// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/typescript
//return the total number of smiling faces in the array
export function countSmileys(arr: string[]) {
	return arr.reduce((smileys, face) => smileys + (face.match(/[:;][~-]?[)D]/) ? 1 : 0), 0);
}
