function findOddNames(list) {
  return list.filter(({ firstName }) => isOdd(sumCharCodes(firstName)));
}

function sumCharCodes(string) {
  return string
    .split('')
    .map((char) => char.charCodeAt())
    .reduce((sum, current) => sum + current);
}

function isOdd(number) {
  return number % 2 !== 0;
}
