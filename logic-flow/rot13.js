/*
Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates
a String into a new String:

For each character in the original String:

If the character is a letter in the modern English alphabet, change it to the
character 13 positions later in the alphabet. So a becomes n. If you reach the
end of the alphabet, return to the beginning. So o becomes b.

Letter transformations preserve case. A becomes N while a becomes n.

Don't modify characters that are not letters.

Write a Function, rot13, that takes a String and returns that String transformed
by the rot13 cipher.
*/

function isUpper(char) {
  return !!(char >= 'A' && char <= 'Z');
}

function isLower(char) {
  return !!(char >= 'a' && char <= 'z');
}

function isAlphabetic(char) {
  return isUpper(char) || isLower(char);
}

function isFirst13(char) {
  return !!((isUpper(char) && char < 'N') || (isLower(char) && char < 'n'));
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
