// function add(a, b) {
//   if (a.length < b.length) {
//     [a, b] = [b, a];
//   }

//   let rest = 0;
//   let result = '';

//   for (let i = 0; i < a.length; i++) {
//     const numberA = +a[a.length - 1 - i];
//     const numberB = +b[b.length - 1 - i] ? +b[b.length - 1 - i] : 0;

//     result = result = ((rest + numberA + numberB) % 10).toString() + result;
//     rest = Math.floor((rest + numberA + numberB) / 10);
//   }

//   return (rest ? rest.toString() : '') + result;
// }

function add(a, b) {
  var res = '';
  var c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res;
}

console.log(add('1', '1'), '2');
console.log(add('123', '456'), '579');
console.log(add('888', '222'), '1110');
console.log(add('1372', '69'), '1441');
console.log(add('12', '456'), '468');
console.log(add('101', '100'), '201');
