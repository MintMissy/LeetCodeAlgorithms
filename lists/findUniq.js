function findUniq(arr) {
  arr.sort();
  console.log(arr);
  if (arr[0] === arr[1]) {
    return arr.pop();
  } else {
    return arr[0];
  }
}

console.log(findUniq([3, 10, 3, 3, 3]));
