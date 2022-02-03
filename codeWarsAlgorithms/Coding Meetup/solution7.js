function findSenior(list) {
  let mostSeniorDev = [];
  let maxSeniorAge = list[0].age;
  list.forEach((devData) => {
    if (devData.age < maxSeniorAge) {
      return;
    } else if (devData.age === maxSeniorAge) {
      mostSeniorDev.push(devData);
    } else {
      mostSeniorDev = [devData];
      maxSeniorAge = devData.age;
    }
  });

  return mostSeniorDev;
}
