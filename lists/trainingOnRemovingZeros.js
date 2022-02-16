function removeZeros(array) {
  let loopLimit = array.length;
  for (let i = 0; i < loopLimit; i++) {
    if (isZero(array[i])) {
      for (let j = i + 1; j < loopLimit; j++) {
        if (array[j] === 0 || array[j - 1] === 0) {
          i--;
        }
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
      loopLimit -= 1;
      [array[loopLimit], array[array.length - 1]] = [
        array[array.length - 1],
        array[loopLimit],
      ];
    }
  }
  return array;
}

function isZero(item) {
  return item === 0 || item === '0';
}
