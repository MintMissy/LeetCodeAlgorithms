let arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(Math.floor(Math.random() * 1000));
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (array[j - 1] > array[j]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }
  return array;
}

console.log(insertionSort(arr));
