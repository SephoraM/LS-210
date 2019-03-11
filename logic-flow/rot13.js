function isUpper(char) {
  return char >= 'A' && char <= 'Z';
}

function isLower(char) {
  return char >= 'a' && char <= 'z';
}

function isAlphabetic(char) {
  return isUpper(char) || isLower(char);
}

function isFirst13(char) {
  return (isUpper(char) && char < 'N') || (isLower(char) && char < 'n');
}

function rot13(string) {
  let cipheredString = '';

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];

    if (isAlphabetic(char)) {
      if (isFirst13(char)) {
        char = String.fromCharCode(char.charCodeAt(0) + 13);
      } else {
        char = String.fromCharCode(char.charCodeAt(0) - 13);
      }
    }

    cipheredString += char;
  }

  return cipheredString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.
