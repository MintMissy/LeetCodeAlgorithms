function sumPairs(ints, s) {
  numbers = {};
  numbers[ints[0]] = '';

  for (let i = 1; i < ints.length; i++) {
    complementary = s - ints[i];
    if (complementary in numbers) {
      return [complementary, ints[i]];
    }
    numbers[ints[i]] = '';
  }

  return undefined;
}

// console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
// console.log('Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8');

console.log(sumPairs([4, -2, 3, 3, 4], 8));
