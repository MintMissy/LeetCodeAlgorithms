// const vowels = ['a', 'e', 'i', 'o', 'u'];

// function getCount(str) {
//   var vowelsCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] === vowels[j]) {
//         vowelsCount++;
//         break;
//       }
//     }
//   }

//   return vowelsCount;
// }

function getCount(str) {
  return str.split('').filter((c) => 'aeiouAEIOU'.includes(c)).length;
}

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
