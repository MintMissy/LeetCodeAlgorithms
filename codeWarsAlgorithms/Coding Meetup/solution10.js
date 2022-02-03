function addUsername(list) {
  return list1.map((devData) => getUsername(devData));
}

function getUsername(devData) {
  return devData['firstName']
    .toLowerCase()
    .concat(devData['lastName'][0].toLowerCase())
    .concat(getBirthDate(devData['age']).toString());
}

function getBirthDate(age) {
  return Date.getFullYear() - age;
}
