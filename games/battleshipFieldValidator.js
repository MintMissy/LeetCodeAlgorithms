const boardSize = 10;
const allowedBattleShips = 1;
const allowedCruisers = 2;
const allowedDestroyers = 3;
const allowedSubmarines = 4;

function validateBattlefield(_field) {
  let field = [..._field];
  let ships = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  };

  // Validate cells around ships
  for (let row = 1; row <= boardSize; row++) {
    for (let column = 1; column <= boardSize; column++) {
      if (!validateCornersAroundCell(field, [row, column])) {
        return false;
      }
    }
  }

  // Get ships on board by type
  for (let row = 1; row <= boardSize; row++) {
    for (let column = 1; column <= boardSize; column++) {
      // if (field[row - 1][column - 1] === 1) {
      //   console.log(getShipLength(field, [row - 1, column - 1]));
      //   ships[getShipLength(field, [row - 1, column - 1])] += 1;
      // }
    }
  }

  if (
    ships[4] != allowedBattleShips ||
    ships[3] != allowedCruisers ||
    ships[2] != allowedDestroyers ||
    ships[1] != allowedSubmarines
  ) {
    return false;
  }

  return true;
}

// function getShipLength(field, cords) {
//   [x, y] = cords;

//   if (!isCellOnBoard(x, y)) {
//     return 0;
//   }

//   if (field[y][x] === 0) {
//     return 0;
//   }

//   field[y][x] = 0;

//   adjacenciesSum = 0;
//   adjacenciesSum += getShipLength(field, [x + 1, y]);
//   adjacenciesSum += getShipLength(field, [x - 1, y]);
//   adjacenciesSum += getShipLength(field, [x, y + 1]);
//   adjacenciesSum += getShipLength(field, [x, y - 1]);

//   return 1 + adjacenciesSum;
// }

function validateCornersAroundCell(field, cords) {
  [x, y] = cords;

  if (
    !validateTopLeft(field, x, y) ||
    !validateTopRight(field, x, y) ||
    !validateBottomLeft(field, x, y) ||
    !validateBottomRight(field, x, y)
  ) {
    return false;
  }

  return true;
}

function validateTopLeft(field, x, y) {
  if (!isCellOnBoard(x, y)) {
    return true;
  }

  return field[x - 1][y + 1] !== 1;
}

function validateTopRight(field, x, y) {
  if (!isCellOnBoard(x, y)) {
    return true;
  }
  return field[x + 1][y + 1] !== 1;
}

function validateBottomLeft(field, x, y) {
  if (!isCellOnBoard(x, y)) {
    return true;
  }
  return field[x - 1][y - 1] !== 1;
}

function validateBottomRight(field, x, y) {
  if (!isCellOnBoard(x, y)) {
    return true;
  }
  return field[x + 1][y - 1] !== 1;
}

function isCellOnBoard(x, y) {
  if (x < 1 || y < 1 || x > 10 || y) {
    return false;
  }
  return true;
}

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);
