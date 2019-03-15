/* In this exercise, you will implement your own version of two Array methods:
Array.prototype.pop and Array.prototype.push. The pop method removes the last
element from an array and returns that element. If pop is called on an empty
array, it returns undefined. The push method, on the other hand, adds one or
more elements to the end of an array and returns the new length of the array. */

// pop method removes the last element from an array and returns that element.
// If pop is called on an empty array, it returns undefined.
function pop(array) {
  const lastElement = array[array.length - 1];
  array.length = Math.max(0, array.length - 1);

  return lastElement;
}

/* with splice
function pop(array) {
  const lastElement = array[array.length - 1];
  array.splice(array.length - 1);

  return lastElement;
}
*/

// Examples: // pop
const array = [1, 2, 3];
console.log(pop(array)); // 3
console.log(array); // [1, 2]
console.log(pop([])); // undefined
console.log(pop([1, 2, ['a', 'b', 'c']])); // ["a", "b", "c"]

// push adds one or more elements to the end of an array and returns the new
// length of the array.
function push(array, ...values) {
  values.forEach((value) => {
    array[array.length] = value;
  });

  return array.length;
}

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6)); // 6
console.log(array2); // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b'])); // 3
console.log(push([], 1)); // 1
console.log(push([])); // 0
