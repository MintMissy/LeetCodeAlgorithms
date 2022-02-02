function openOrSenior(data) {
  let resultList = [];

  for (const dataItem of data) {
    if (dataItem[0] >= 55 && dataItem[1] > 7) {
      resultList.push('Senior');
    } else {
      resultList.push('Open');
    }
  }
  return resultList;
}
