// https://leetcode.com/problems/two-sum/

// BRUTE FORCE

// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) {
//         continue;
//       }

//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

function twoSum(nums: number[], target: number): number[] {
  console.log('===================================');

  const map = {};
  for (let i = 0; i < nums.length - 1; i++) {
    map[target - nums[i]] = i;
    if (nums[i + 1] in map) {
      return [map[nums[i + 1]], i + 1];
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9), '===', [0, 1]);
console.log(twoSum([3, 2, 4], 6), '===', [1, 2]);
console.log(twoSum([3, 3], 6), '===', [0, 1]);
