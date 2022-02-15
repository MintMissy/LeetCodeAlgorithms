// function countSheeps(arrayOfSheep) {
//   let acc = 0;
//   for (let i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i]) {
//       acc += 1;
//     }
//   }
//   return acc;
// }

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
