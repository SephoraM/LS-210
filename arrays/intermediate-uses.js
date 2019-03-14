/* Write a function that creates and returns a new array from its array
argument. The new array should contain all values from the argument array whose
positions have an odd index. */

function oddElementsOf(arr) {
  return arr.filter((_, idx) => idx % 2 !== 0);
}

const digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits)); // returns [8, 16, 42]

/* Write a function that takes two arrays and returns a new array whose even
positions come from the first array, and whose odd positions come from the
second array. Assume that both arrays have equal length. */

function combinedArray(even, odd) {
  const newArray = [];

  for (let i = 0; i < even.length; i += 1) {
    newArray.push(even[i]);
    newArray.push(odd[i]);
  }

  return newArray;
}

const digits2 = [4, 8, 15, 16, 23, 42];
const letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits2, letters));
// returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]

/* Write a function that takes an array argument and returns a new array that
contains all the argument's elements in their original order followed by all
the argument's elements in reverse order. */

function mirrorArray(array) {
  return array.concat(array.slice().reverse());
}

console.log(mirrorArray(['A', 'B', 'C']));

/* Use the array sort method to create a function that takes an array of numbers
and returns a new array of the numbers sorted in descending order. Do not alter
the original array. */

function sortDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

const array = [23, 4, 16, 42, 8, 15];
const result = sortDescending(array); // returns [42, 23, 16, 15, 8, 4]
console.log(result); // logs    [42, 23, 16, 15, 8, 4]
console.log(array); // logs    [23, 4, 16, 42, 8, 15]

/* Write a function that takes an array of arrays as an argument, and returns a
new array that contains the sums of each of the sub-arrays. */

function matrixSums(arr) {
  return arr.map(subArr => subArr.reduce((acc, val) => acc + val, 0));
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]])); // returns [15, 60, 12]

/* Write a function that takes an array, and returns a new array with duplicate
elements removed. */

function uniqueElements(arr) {
  const newArr = [];

  arr.forEach((val) => {
    if (!newArr.includes(val)) {
      newArr.push(val);
    }
  });

  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4])); // returns [1, 2, 4, 3, 5]
