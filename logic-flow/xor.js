/* Write a function named isXor that takes two arguments, and returns true if
exactly one argument is truthy, false otherwise. Your function should work with
the boolean values of true and false, but also any JavaScript values based on
their "truthiness". */

// arg1, arg2 => boolean
// only one of the arguments evaluates to true to return true, else false
function isXor(arg1, arg2) {
  return !!(!(arg1 && arg2) && (arg1 || arg2));
}

// Example
console.log(isXor(false, true)); // true
console.log(isXor(true, false)); // true
console.log(isXor(false, false)); // false
console.log(isXor(true, true)); // false

console.log(isXor(false, 3)); // true
console.log(isXor('a', undefined)); // true
console.log(isXor(null, '')); // false
console.log(isXor('2', 23)); // false
