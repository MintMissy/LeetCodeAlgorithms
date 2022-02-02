function askForMissingDetails(list) {
  return list.filter((developerData) => {
    for (const key in developerData) {
      if (developerData[key] === null) {
        return (developerData.question = `Hi, could you please provide your ${key}.`);
      }
    }
  });
}
