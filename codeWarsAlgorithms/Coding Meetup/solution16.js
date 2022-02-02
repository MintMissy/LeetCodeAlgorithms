function askForMissingDetails(list) {
  return list
    .filter((data) => haveNotProvidedProperty(data))
    .map((data) => setQuestion(data));
}

function haveNotProvidedProperty(developerData) {
  for (const key in developerData) {
    if (developerData[key] === null) {
      return true;
    }
  }
  return false;
}

function setQuestion(developerData) {
  let missingProperty = '';
  for (const key in developerData) {
    if (developerData[key] === null) {
      missingProperty = key;
    }
  }
  developerData[
    'question'
  ] = `Hi, could you please provide your ${missingProperty}.`;

  return developerData;
}
