/**
 * Implement a function that takes a string as an argument and returns a new
 * string that contains the original string in reverse.
 */

// string => new string
// reverse the string
// split the string into characters
// reverse the order of the characters
// join into string and return
const reverse = string => string
  .split('')
  .reverse()
  .join('');

// Examples

console.log(reverse('hello')); // returns "olleh"
console.log(reverse('The quick brown fox')); // returns "xof nworb kciuq ehT"
