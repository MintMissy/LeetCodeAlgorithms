function pathFinder(maze) {
  console.log('\n');
  console.log(maze);
  let mazeArray = maze.split('\n').map((item) => item.split(''));

  if (move(mazeArray, [mazeArray.length - 1, mazeArray.length - 1])) {
    return true;
  }

  return false;
}

let moveCounter = 0;

function move(mazeArray, position, previousPositions = []) {
  moveCounter++;
  console.log(`===> NEW MOVE ${moveCounter}`);
  positionCopy = [...position];
  console.log(positionCopy);
  const x = positionCopy[0];
  const y = positionCopy[1];

  // If get to destination return true
  if (`${x},${y}` === `${0},${0}`) {
    console.log('EXIT IS REACHABLE');
    return true;
  }

  // Stop on wall hit
  if (mazeArray[y][x] === 'W') {
    console.log('STOP');
    return false;
  }

  // If position was tested before stop
  if (previousPositions.includes(`${x},${y}`)) {
    return false;
  } else {
    previousPositions.push(`${x},${y}`);
  }

  // Move up
  if (y - 1 >= 0) {
    console.log('up');
    if (move(mazeArray, [x, y - 1], [...previousPositions])) {
      return true;
    }
  }

  // Move left
  if (x - 1 >= 0) {
    console.log('left');
    if ((move(mazeArray, [x - 1, y]), [...previousPositions])) {
      return true;
    }
  }

  console.log(previousPositions);
  // Move down
  if (y + 1 < mazeArray.length) {
    console.log('down');
    if (move(mazeArray, [x, y + 1], [...previousPositions])) {
      return true;
    }
  }

  // Move right
  if (x + 1 < mazeArray.length) {
    console.log('right');
    if (move(mazeArray, [x + 1, y], [...previousPositions])) {
      return true;
    }
  }

  return false;
}
