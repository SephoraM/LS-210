/* Write a function that takes two arguments:

a string to be split
a delimiter character
The function logs the split strings to the console, as shown below:
*/

// string, string => undefined
// raise an error if no second argument is given
// split the string with delimiter as the condition for the split. log each
// split string when the delimiter is true
function splitString(string, delimiter) {
  let subString = '';

  if (delimiter === undefined) {
    const DELIMITER_ERROR = Error('No delimiter');
    console.error(DELIMITER_ERROR.toString());
    return;
  }

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === delimiter) {
      console.log(subString);
      subString = '';
    } else if (delimiter === '') {
      console.log(string[i]);
    } else {
      subString += string[i];
    }
  }
  console.log(subString);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
/* You may use the square brackets ([]) to access a character by index
(as shown below), and the length property to find the string length.
However, you may not use any other properties or methods from JavaScript's
built-in String class. */

'hello'[0]; // "h"
'hello'[4]; // "o"
