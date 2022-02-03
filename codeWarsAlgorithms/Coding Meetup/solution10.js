function addUsername(list) {
  return list.map((devData) => {
    devData.username = getUsername(devData);
    return devData;
  });
}

function getUsername(devData) {
  return (
    devData['firstName'].toLowerCase() +
    devData['lastName'][0].toLowerCase() +
    getBirthDate(devData['age']).toString()
  );
}

function getBirthDate(age) {
  return new Date().getFullYear() - age;
}
