let arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(Math.floor(Math.random() * 1000));
}

function mergeSort(array) {
  let arr = [...array];

  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  // splice modifies basic arr
  let partArr = arr.splice(0, mid);
  partArr = mergeSort(partArr);
  arr = mergeSort(arr);

  let wholeArray = [];
  while (arr.length !== 0 && partArr.length !== 0) {
    if (arr[0] < partArr[0]) {
      wholeArray.push(arr[0]);
      arr.shift();
    } else {
      wholeArray.push(partArr[0]);
      partArr.shift();
    }
  }

  return wholeArray.concat(arr).concat(partArr);
}

console.log(mergeSort(arr));
