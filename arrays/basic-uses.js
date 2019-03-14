/* Write a function that returns the first element of an array passed in as an
argument. */

function firstElementOf(arr) {
  return arr[0];
}

console.log(firstElementOf(['U', 'S', 'A'])); // returns "U"

/* Write a function that returns the last element of an array passed in as an
argument. */

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

console.log(lastElementOf(['U', 'S', 'A'])); // returns "A"

/* Write a function that accepts two arguments, an array and an integer index
position, and returns the element at the given index. What happens if the index
is greater than the length of the array? What happens if it is a negative
integer? */

// array, number => array element at given index
// return undefined if the element is not at the given index or is negative integer
function nthElementOf(arr, index) {
  return arr[index];
}

const digits1 = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits1, 3)); // returns 16
console.log(nthElementOf(digits1, 8)); // what does this return? undefined
console.log(nthElementOf(digits1, -1)); // what does this return? undefined

/* Can we insert data into an array at a negative index? If so, why is this
possible? */

// We can insert data into an array at a negative index although it is not
// really a negative index, rather it's a property of the array with the
// negative index serving as a key to the value which was placed at that index.
// Will learn more about this but it has to do with arrays being objects. The
// value at the 'negative index' does not change the length of the array.

/* Write a function that accepts an array as the first argument and an integer
value, count, as the second. It should return a new array that contains the
first count elements of the array. */

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

const digits2 = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits2, 3)); // returns [4, 8, 15]

/* Write a function like the previous one, except this time return the last
count elements as a new array. */

function lastNOf(arr, count) {
  return arr.slice(-count);
}

const digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3)); // returns [16, 23, 42]

/* Using the function from the previous problem, What happens if you pass a
count greater than the length of the array? How can you fix the function so it
returns a new instance of the entire array when count is greater than the array
length? */

// My solution will still work with a greater number

/* Write a function that accepts two arrays as arguments and returns an array
with the first element from the first array and the last element from the
second array. */

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42])); // returns [4, 42]
