function differentiate(fun) {
  if (!fun.includes('x')) {
    return 0;
  }

  const amountStr = fun.slice(0, fun.indexOf('x') + 1);

  let amount;

  if (amountStr === '-x') {
    amount = '-1';
  } else if (amountStr === 'x') {
    amount = '1';
  } else {
    amount = +amountStr.replace('x', '');
  }

  if (!fun.includes('^')) {
    return amount;
  }

  const xPower = +fun.slice(fun.indexOf('^'), fun.length).replace('^', '');
  const power = +fun.slice(fun.indexOf('^') + 1, fun.length);
  let powerResult = '^' + (power - 1);

  if (powerResult === '^1') {
    powerResult = '';
  }

  let amountResult = amount * xPower;

  if (amountResult === -1) {
    amountResult = '-';
  } else if (amountResult === 1) {
    amountResult = '';
  }

  console.log(amountResult);
  return amountResult + 'x' + powerResult;
}

console.log(differentiate('x^-1'));
// console.log(differentiate('3x^2'));
// console.log(differentiate('-5x^3'));
// console.log(differentiate('6x^-2'));
// console.log(differentiate('5x'));
// console.log(differentiate('-x'));
// console.log(differentiate('x'));
// console.log(differentiate('42'));
