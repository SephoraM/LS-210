/* Implement a function that takes a string and a number times as arguments.
The function should return the string repeated times number of times. If times
is not a number, return undefined. If it is a negative number, return undefined
also. If times is 0, return an empty string. You may ignore the possibility that
times is a number that isn't an integer. */

// => string, number => string
// if the second argument is not a number, return undefined
// if it is a negative number, return undefined
// if times is 0, return empty string
// taken the given string and append it to itself the given number of times

function repeat(string, times) {
  let newString = '';

  if (typeof times !== 'number' || times < 0) {
    return undefined;
  }

  for (let i = 1; i <= times; i += 1) {
    newString += string;
  }

  return newString;
}

console.log(repeat('abc', 1)); // "abc"
console.log(repeat('abc', 2)); // "abcabc"
console.log(repeat('abc', -1)); // undefined
console.log(repeat('abc', 0)); // ""
console.log(repeat('abc', 'a')); // undefined
console.log(repeat('abc', false)); // undefined
console.log(repeat('abc', null)); // undefined
console.log(repeat('abc', '  ')); // undefined
/* You may concatenate strings, but you may not use any other properties or
methods from JavaScript's built-in String class. */
