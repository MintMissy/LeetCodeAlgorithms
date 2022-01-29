let arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(Math.floor(Math.random() * 1000));
}

function quicksort(arr) {
  if (arr.length <= 0) {
    return arr;
  }

  let pivot = arr[0];
  let pivotArr = [arr[0]];
  let arrLeft = [];
  let arrRight = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      arrLeft.push(arr[i]);
    } else if (arr[i] === pivot) {
      pivotArr.push(arr[i]);
    } else if (arr[i] > pivot) {
      arrRight.push(arr[i]);
    }
  }
  return quicksort(arrLeft).concat(pivotArr).concat(quicksort(arrRight));
}

// console.time();
console.log(quicksort(arr));
// console.timeEnd();
