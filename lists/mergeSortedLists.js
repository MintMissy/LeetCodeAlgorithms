var mergeTwoSortedLists = function (list1, list2) {
  let resultList = [];
  while (list1.length !== 0 && list2.length !== 0) {
    if (list1[0] > list2[0]) {
      resultList.push(list2[0]);
      list2.shift();
    } else {
      resultList.push(list1[0]);
      list1.shift();
    }
  }
  return resultList.concat(list1).concat(list2);
};

list1 = [1, 2, 4];
list2 = [1, 3, 4];
console.log(mergeTwoSortedLists(list1, list2));
