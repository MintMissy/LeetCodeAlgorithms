function getFactors(number) {
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

function gcd(numberA, numberB) {
  const aFactors = getFactors(numberA);
  const bFactors = getFactors(numberB);

  const length =
    aFactors.length > bFactors.length ? aFactors.length : bFactors.length;

  const gcdArray = [];
  for (let i = 0; i < length; i++) {}
}

console.log(gcd(6, 12));
