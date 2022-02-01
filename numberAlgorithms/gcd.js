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

function recursiveGcd(numberA, numberB) {
  if (numberB) {
    return recursiveGcd(numberB, numberA % numberB);
  } else {
    return Math.abs(numberA);
  }
}

function gcd(numberA, numberB) {
  if (numberA < numberB) {
    [numberA, numberB] = [numberB, numberA];
  }

  while (true) {
    numberA %= numberB;
    if (numberA === 0) {
      return numberB;
    }

    numberB %= numberA;
    if (numberB === 0) {
      return numberA;
    }
  }
}
