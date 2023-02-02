// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/typescript
export function persistence(num: number): number {
let persistenceCount = 0;
	
	while(num < 0 || num > 9){
		num = String(num).split('').reduce((previous, current) => previous * parseInt(current) , 1)
		persistenceCount++;
	}

	return persistenceCount
}

// Recursion
export function persistencee(num: number): number {
	if (num >= 0 && num <= 9) {
		return num;
	}

	return persistence(String(num).split('').reduce((previous, current) => previous * parseInt(current) ,1))
}

console.log(persistence(39))