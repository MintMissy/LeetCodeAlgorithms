let arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(Math.floor(Math.random() * 1000));
}

function bubbleSortWhile(array) {
  let arr = [...array];
  let sorted = true;

  do {
    sorted = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        sorted = false;
      }
    }
  } while (!sorted);

  return arr;
}

function bubbleSortLoops(array) {
  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function bubbleSortLoopsOptimized(array) {
  let arr = [...array];
  let isSorted = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSorted = false;
      }
    }
    if (isSorted) {
      return arr;
    }
  }

  return arr;
}

console.log(bubbleSort(arr));
