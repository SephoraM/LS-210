/* Write a function that takes a string as an argument, and returns the string
stripped of spaces from both ends. Do not remove or alter internal spaces. */

// string => string
// iterate over the string reassign the string every remaining letter in the
// string starting at the first non space value. break the loop when first letter is found
// do the same thing starting from the end of the string going backwards

function trimLeft(string) {
  let trimmed = '';
  let copyMode = false;

  for (let i = 0; i < string.length; i += 1) {
    if (i !== ' ') {
      copyMode = true;
    }
    if (copyMode) {
      trimmed += string[i];
    }
  }

  return trimmed;
}

function trimRight(string) {
  let trimmed = '';
  let copyMode = false;
  let index = 0;

  for (let i = string.length - 1; i >= 0; i -= 1) {
    if (i !== ' ') {
      copyMode = true;
    }
    if (copyMode) {
      trimmed += string[index];
      index += 1;
    }
  }

  return trimmed;
}

function trim(string) {
  const trimmedLeft = trimLeft(string);
  return trimRight(trimmedLeft);
}

// Example
console.log(trim('  abc  ')); // "abc"
console.log(trim('abc   ')); // "abc"
console.log(trim(' ab c')); // "ab c"
console.log(trim(' a b  c')); // "a b  c"
console.log(trim('      ')); // ""
console.log(trim('')); // ""
/* You may use the square brackets ([]) to access a character by index
(as shown below), and the length property to find the string length. However,
you may not use any other properties or methods from JavaScript's built-in
String class. */

'hello'[0]; // "h"
'hello'[4]; // "o"
