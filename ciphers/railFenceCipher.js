// NOT WORKING
function encodeRailFenceCipher(string, numberRails) {
  if (string === '') {
    return '';
  }

  let rails = {};
  let goingDown = true;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (rails[i % numberRails] === undefined) {
      rails[i % numberRails] = [];
    }

    if (i % numberRails === 0 && i !== 0) {
      goingDown = !goingDown;
    }

    if (goingDown) {
      rails[i % numberRails].push(char);
    } else {
      rails[Math.abs(numberRails - 2 - (i % numberRails))].push(char);
    }

    console.log(`\n`);
    console.log(i % numberRails);
    console.log(goingDown);
    for (const rail in rails) {
      console.log(rails[rail]);
    }
    console.log(`\n`);
  }

  encodedString = '';
  for (const rail in rails) {
    console.log(rails[rail].reduce((acc, item) => acc + item, ''));
    encodedString += rails[rail].reduce((acc, item) => acc + item, '');
  }

  return encodedString;
}

function decodeRailFenceCipher(string, numberRails) {
  // code
}

console.log(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3));
