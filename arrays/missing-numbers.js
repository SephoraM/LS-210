/* Write a function that takes a sorted array of integers as an argument, and
returns an array that includes all the missing integers (in order) between the
first and last elements of the argument. */

// array => array
// given array is a sorted array of integers
// return an array with all the missing integers in order
// iterate from first number in array to last, check if it exists in the array,
// if it doesn't, push the iterator to the new array
// otherwise, skip to the next number

function missing(arr) {
  const newArr = [];
  const last = arr[arr.length - 1];

  if (last === undefined) return newArr;

  for (let i = arr[0]; i < last; i += 1) {
    if (!arr.includes(i)) {
      newArr.push(i);
    }
  }

  return newArr;
}

// Examples:

console.log(missing([-3, -2, 1, 5])); // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4])); // []
console.log(missing([1, 5])); // [2, 3, 4]
console.log(missing([6])); // []
