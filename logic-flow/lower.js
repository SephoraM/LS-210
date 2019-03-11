/* Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, get its ASCII
numeric representation from the ASCII table, add 32 to that number, then convert
the number back to a character using the same ASCII table. You can use the
String.fromCharCode and the String.charCodeAt methods for these operations.
For example:

var string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase
*/

// string => string
// 65 - 90 uppercase alphabet
// iterate over the given string
// save the char code, check if the code is between 65 and 90 inclusive
// if so, add 32 to the code, convert the code back to a char, append to new string
// otherwise, append to new string in original state
// return new string
function toLowerCase(string) {
  let newString = '';
  let code;
  let char;

  for (let i = 0; i < string.length; i += 1) {
    code = string.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      char = String.fromCharCode((code += 32));
    } else {
      char = string[i];
    }
    newString += char;
  }

  return newString;
}

console.log(toLowerCase('ALPHABET')); // "alphabet"
console.log(toLowerCase('123')); // "123"
console.log(toLowerCase('abcDEF')); // "abcdef"
