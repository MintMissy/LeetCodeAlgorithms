// function digPow(n, p) {
//   let sum = 0;
//   const stringN = [...n.toString()];

//   stringN.forEach((number) => {
//     sum += Math.pow(number, p);
//     p += 1;
//   });

//   return sum % n === 0 ? sum / n : -1;
// }

function digPow(n, p) {
  var x = String(n)
    .split('')
    .reduce((sum, digit, index) => sum + Math.pow(digit, p + index), 0);
  return x % n ? -1 : x / n;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));
