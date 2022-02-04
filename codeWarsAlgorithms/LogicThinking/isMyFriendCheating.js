// function removeNb(n) {
//   const results = [];
//   let sum = (n * (n + 1)) / 2;

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (sum - i - j === i * j) {
//         results.push([i, j]);
//       }
//     }
//   }

//   return results;
// }

function removeNb(n) {
  const results = [];
  let sum = (n * (n + 1)) / 2;

  for (let x = 1; x <= n; x++) {
    let y = (sum - x) / (x + 1);
    if (y <= n && x * y === sum - x - y) {
      if ((x + y) % 1 === 0) {
        results.push([x, y]);
      }
    }
  }

  return results;
}

console.log(removeNb(26));
