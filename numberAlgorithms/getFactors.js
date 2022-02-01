export function getFactors(number) {
  if (number <= 2) {
    return number;
  } else {
    for (let i = 2; i <= Math.floor(number / 2); i++) {
      if (number % i === 0) {
        number /= i;
        return [i].concat(getFactors(number));
      }
    }
    return number;
  }
}
