// function openOrSenior(data) {
//   let resultList = [];

//   for (const dataItem of data) {
//     if (dataItem[0] >= 55 && dataItem[1] > 7) {
//       resultList.push('Senior');
//     } else {
//       resultList.push('Open');
//     }
//   }
//   return resultList;
// }

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? 'Senior' : 'Open'
  );
}
