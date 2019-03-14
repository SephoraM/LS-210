/* 1. Write a function named push that accepts two arguments: an Array and any
other value. The function should append the second argument to the end of the
Array, and return the new length of the Array. */

function push(array, value) {
  array[array.length] = value;

  return array.length;
}

const count1 = [0, 1, 2];
console.log(push(count1, 3)); // 4
console.log(count1); // [ 0, 1, 2, 3 ]

/* Write a function named pop that accepts one argument: an Array. The function
should remove the last element from the array and return it. */

function pop(array) {
  const lastItem = array[array.length - 1];
  array.length -= 1;

  return lastItem;
}

const count2 = [1, 2, 3];
console.log(pop(count2)); // 3
console.log(count2); // [ 1, 2 ]

/* Write a function named unshift that accepts two arguments: an Array and a
value. The function should insert the value at the beginning of the Array, and
return the new length of the array. You will need a for loop for this problem. */

function unshift(array, value) {
  const arrayLength = array.length;
  let nextValue = value;
  let temp;

  for (let i = 0; i <= arrayLength; i += 1) {
    temp = array[i];
    array[i] = nextValue;
    nextValue = temp;
  }

  return array.length;
}

const count3 = [1, 2, 3];
console.log(unshift(count3, 0)); // 4
console.log(count3); // [ 0, 1, 2, 3 ]

// Launch School solution:
// function unshift(array, value) {
//   var i;
//   for (i = array.length; i > 0; i -= 1) {
//     array[i] = array[i - 1];
//   }
//
//   array[0] = value;
//   return array.length;
// }

/* Write a function named shift that accepts one argument: an Array. The
function should remove the first value from the beginning of the Array and
return it. */

function shift(array) {
  const firstElement = array[0];

  if (array.length === 0) {
    return undefined;
  }

  for (let i = 0; i < array.length - 1; i += 1) {
    array[i] = array[i + 1];
  }
  array.length -= 1;

  return firstElement;
}

const count4 = [1, 2, 3];
console.log(shift(count4)); // 1
console.log(count4); // [ 2, 3 ]
