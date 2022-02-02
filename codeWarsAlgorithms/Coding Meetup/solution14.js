function orderFood(list) {
  return list.reduce((meals, data) => {
    meals[data.meal] = (meals[data.meal] | 0) + 1;
    return meals;
  }, {});
}
