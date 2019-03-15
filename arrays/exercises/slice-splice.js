/* In this exercise, you will implement your own versions of the
Array.prototype.slice and Array.prototype.splice methods according to the
following specifications.

The slice function takes three arguments: an array, and two integers
representing a begin and an end index. The function returns a new array
containing the extracted elements starting from begin up to but not including
end. slice does not mutate the original array.

The splice function changes the contents of an array by deleting existing
elements and/or adding new elements. The function takes the following
arguments: an array, a start index, a deleteCount, and zero or more elements
to be added. The function removes deleteCount number of elements from the array,
beginning at the start index. If any optional element arguments are provided,
splice inserts them into the array beginning at the start index. The function
returns a new array containing the deleted elements, or an empty array ([])
if no elements are deleted. splice mutates the original array.

Additional specifications:

slice:

The values of begin and end will always be integers greater than or equal to 0.
If the value of begin or end is greater than the length of the array, set it to
equal the length.

splice:

The values of start and deleteCount will always be integers greater than or
equal to 0.
If the value of start is greater than the length of the array, set it to equal
the length.
If the value of deleteCount is greater than the number of elements from start
up to the end of the array, set deleteCount to the difference between the
array's length and start.
Takes optional arguments for elements to add to the array; denoted by the
parameters element1 up to elementN. If no elements to add are provided, splice
only removes elements from the array. */

// Examples:
// The slice function takes three arguments: an array, and two integers
// representing a begin and an end index. The function returns a new array
// containing the extracted elements starting from begin up to but not including
// end. slice does not mutate the original array.
//
// The values of begin and end will always be integers greater than or equal to 0.
// If the value of begin or end is greater than the length of the array, set it to
// equal the length.

function slice(array, begin, end) {
  return array.filter((val, idx) => idx >= begin && idx < end);
}

console.log(slice([1, 2, 3], 1, 2)); // [2]
console.log(slice([1, 2, 3], 2, 0)); // []
console.log(slice([1, 2, 3], 5, 1)); // []
console.log(slice([1, 2, 3], 0, 5)); // [1, 2, 3]

let arr = [1, 2, 3];
console.log(slice(arr, 1, 3)); // [2, 3]
console.log(arr); // [1, 2, 3]

// The splice function changes the contents of an array by deleting existing
// elements and/or adding new elements. The function takes the following
// arguments: an array, a start index, a deleteCount, and zero or more elements
// to be added. The function removes deleteCount number of elements from the array,
// beginning at the start index. If any optional element arguments are provided,
// splice inserts them into the array beginning at the start index. The function
// returns a new array containing the deleted elements, or an empty array ([])
// if no elements are deleted. splice mutates the original array.
//
// The values of start and deleteCount will always be integers greater than or
// equal to 0.
// If the value of start is greater than the length of the array, set it to equal
// the length.
// If the value of deleteCount is greater than the number of elements from start
// up to the end of the array, set deleteCount to the difference between the
// array's length and start.
// Takes optional arguments for elements to add to the array; denoted by the
// parameters element1 up to elementN. If no elements to add are provided, splice
// only removes elements from the array.
// iterate over original array
// if idx >= start and idx is less than start + deleteCount
// do not assign the value to new array, instead put them in array to return
// otherwise, assign value
// if === start iterate over the given elements and push the them to the new array
// iterate over new array and assign all values to old array
// length of old array is length of new array

function splice(array, start, deleteCount, ...elements) {
  const begin = Math.min(start, array.length);
  const end = Math.min(array.length, start + deleteCount);

  const deletedSlice = array.slice(begin, end);
  const lastSlice = array.slice(end);

  array.length = begin;
  array.push(...elements, ...lastSlice);

  return deletedSlice;
}

console.log(splice([1, 2, 3], 1, 2)); // [2, 3]
console.log(splice([1, 2, 3], 1, 3)); // [2, 3]
console.log(splice([1, 2, 3], 1, 0)); // []
console.log(splice([1, 2, 3], 0, 1)); // [1]
console.log(splice([1, 2, 3], 1, 0, 'a')); // []

arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two')); // [2]
console.log(arr); // [1, "two", 3]

arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three')); // [2, 3]
console.log(arr); // [1, "two", "three"]

arr = [1, 2, 3];
console.log(splice(arr, 1, 0)); // []
console.log(splice(arr, 1, 0, 'a')); // []
console.log(arr); // [1, "a", 2, 3]

arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a')); // []
console.log(arr); // ["a", 1, 2, 3]
