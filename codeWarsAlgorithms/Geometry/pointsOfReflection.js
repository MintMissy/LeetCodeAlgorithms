// function symmetricPoint(p, q) {
//   const x = getOppositeCoordinate(p[0], q[0]);
//   const y = getOppositeCoordinate(p[1], q[1]);
//   return [x, y];
// }

// function getAxisDistance(number1, number2) {
//   return Math.abs(number1 - number2);
// }

// function getOppositeCoordinate(number, symmetricCenter) {
//   const pointsDistance = getAxisDistance(number, symmetricCenter);
//   if (number > symmetricCenter) {
//     return symmetricCenter - pointsDistance;
//   } else {
//     return symmetricCenter + pointsDistance;
//   }
// }

function symmetricPoint(p, q) {
  return [2 * q[0] - p[0], 2 * q[1] - p[1]];
}
