/* Write two functions that each take two strings as arguments. Their expected
behaviors are as follows:

The indexOf() function searches for the first instance of a substring in
firstString that matches the string secondString, and returns the index of the
character where that substring begins.

The lastIndexOf() function searches for the last instance of a substring in
firstString that matches the string secondString, and returns the index of the
character where that substring begins.

Both functions return -1 if firstString does not contain the substring specified
by secondString.
*/

// string, string => number
// check the first string for first char of second string, upon match, check that
// the following chars match the rest of the second string. if yes, return number
// which represents the index of the first matching char, if not keep iterating over
// first string. if no match is found, return -1

function stringCheck(firstString, secondString, firstIndex) {
  let str = '';
  for (let j = firstIndex; j < secondString.length + firstIndex; j += 1) {
    str += firstString[j];
  }
  return str;
}

function indexOf(firstString, secondString) {
  const lastPos = firstString.length - secondString.length;
  for (let i = 0; i <= lastPos; i += 1) {
    if (firstString[i] === secondString[0]) {
      if (stringCheck(firstString, secondString, i) === secondString) return i;
    }
  }

  return -1;
}

// string, string => number
// reproduce the last function but iterate backwards searching for the string
function lastIndexOf(firstString, secondString) {
  const lastPos = firstString.length - secondString.length;
  for (let i = lastPos; i >= 0; i -= 1) {
    if (firstString[i] === secondString[0]) {
      if (stringCheck(firstString, secondString, i) === secondString) return i;
    }
  }

  return -1;
}

console.log(indexOf('Some strings', 's')); // 5
console.log(indexOf('Blue Whale', 'Whale')); // 5
console.log(indexOf('Blue Whale', 'Blute')); // -1
console.log(indexOf('Blue Whale', 'leB')); // -1

console.log(lastIndexOf('Some strings', 's')); // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale')); // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all')); // -1
/* You may use the square brackets ([]) to access a character by index
(as shown below), and the length property to find the string length. However,
you may not use any other properties or methods from JavaScript's built-in
String class. */

'hello'[0]; // "h"
'hello'[4]; // "o"
