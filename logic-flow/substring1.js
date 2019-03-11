/* Write a function that returns a substring of a string based on a starting
index and length. */

// string, number, number => string
function substr(string, start, length) {
  let subString = '';
  const strLength = string.length;

  let index = start < 0 ? strLength + start : start;
  let counter = length === undefined ? strLength : length;

  while (counter > 0) {
    if (string[index] === undefined) break;

    subString += string[index];
    index += 1;
    counter -= 1;
  }

  return subString;
}

const string = 'hello world';

console.log(substr(string, 2, 4)); // "llo "
console.log(substr(string, -3, 2)); // "rl"
console.log(substr(string, 8, 20)); // "rld"
console.log(substr(string, 0, -20)); // ""
console.log(substr(string, 0, 0)); // ""
console.log(substr(string, 0)); // "hello world"
/* The start argument is the starting index. If negative, treat it as
strLength + start where strLength is the length of the string. For example,
if start is -3, treat it as strLength - 3.
The length argument is the maximum length of the desired substring.
If length exceeds the number of characters available, just use the
available characters. */
