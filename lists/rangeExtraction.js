function solution(list) {
  let result = '';
  let sequenceStartItem = 0;

  if (list[1] - list[0] === 1) {
    sequenceStartItem = list[0];
  } else {
    result = `${list[0]}`;
  }

  for (let i = 1; i < list.length; i++) {
    const currentItem = list[i];
    const previousItem = list[i - 1];

    if (currentItem - previousItem === 1) {
      // If there is a sequence
      if (i < list.length - 1) {
        continue;
      } else {
        if (currentItem - sequenceStartItem > 1) {
          result += `,${sequenceStartItem}-${currentItem}`;
        } else {
          result += `,${sequenceStartItem},${currentItem}`;
        }
      }
    } else {
      // If sequence is broken
      if (previousItem - sequenceStartItem > 1) {
        // If sequence is longer than 2 items
        if (result === '') {
          result += `${sequenceStartItem}-${previousItem}`;
        } else {
          result += `,${sequenceStartItem}-${previousItem}`;
        }
      } else if (previousItem - sequenceStartItem === 1) {
        // If sequence is equal to 2 items
        if (result === '') {
          result += `${sequenceStartItem}`;
          result += `,${previousItem}`;
        } else {
          result += `,${sequenceStartItem}`;
          result += `,${previousItem}`;
        }
      }

      sequenceStartItem = currentItem;

      if (i === list.length - 1) {
        result += `,${currentItem}`;
      }

      if (i + 1 < list.length) {
        if (list[i + 1] - currentItem !== 1) {
          result += `,${currentItem}`;
        }
      }
    }
  }

  return result;
}

console.log(
  solution([
    -83, -82, -80, -77, -75, -73, -72, -69, -67, -66, -65, -63, -61, -60, -58,
    -55,
  ])
);
console.log('-83,-82,-80,-77,-75,-73,-72,-69,-67--65,-63,-61,-60,-58,-55');

console.log(solution([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20]));
console.log('-3--1,2,10,15,16,18-20');

console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);
console.log('-6,-3-1,3-5,7-11,14,15,17-20');
