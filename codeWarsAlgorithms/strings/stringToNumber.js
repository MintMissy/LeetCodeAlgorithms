function convertToNumber(string) {
  [string, decimalPlaces] = string.split('.');
  let number = 0;

  // Get integers
  for (let i = 0; i < string.length; i++) {
    number += Math.pow(10, string.length - i - 1) * +string[i];
  }

  if (decimalPlaces) {
    for (let i = 0; i < decimalPlaces.length; i++) {
      number += Math.pow(10, i * -1 - 1) * +decimalPlaces[i];
    }
  }

  return number;
}

console.log(convertToNumber('142'));
console.log(convertToNumber('142.15'));
console.log(convertToNumber('15.15'));
console.log(convertToNumber('14444.12345'));
