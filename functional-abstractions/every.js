/**
 * Write a function named myOwnEvery that's similar to the Array.prototype.every
 * method. It should take an array and a function as arguments, and return true if
 * every element passed to the function evaluates as truthy.
 */

function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (!func(array[i])) return false;
  }

  return true;
}

const isAString = function (value) {
  return typeof value === 'string';
};

console.log(myOwnEvery(['a', 'a234', '1abc'], isAString)); // true
console.log(myOwnEvery(['a', 'a234', '1abc', 1], isAString)); // false

// Let's write a program that checks whether all elements of an array are Numbers.

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

const isANumber = function (value) {
  return typeof value === 'number' && !Number.isNaN(value);
};

console.log(areAllNumbers([1, 5, 6, 7, '1'])); // false
console.log(areAllNumbers([1, 5, 6, 7, 1])); // true
console.log(areAllNumbers([1, 5, 6, 7, NaN])); // false
