/* Write a function named slice that accepts three arguments: an Array, a start
index, and an end index. The function should return a new Array that contains
values from the original Array starting with the value at the starting index,
and including all values up to but not including the end index. Do not modify
the original Array.

You may use functions that were answers to previous practice problems to
complete this problem, but do not use any built-in Array methods. */

function push(array, value) {
  array[array.length] = value;

  return array.length;
}

function slice(array, start, end) {
  const newArray = [];

  for (let i = start; i < end; i += 1) {
    push(newArray, array[i]);
  }

  return newArray;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2)); // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3)); // [ 'b', 'c' ]

/* Write a function named splice that accepts three arguments: an Array, a start
index, and the number of values to remove. The function should remove values
from the original Array, starting with the first index and removing the
specified number of values. The function should return the removed values in a
new Array.

You may use functions that were answers to previous practice problems to
complete this problem, but do not use any built-in Array methods. */

function splice(array, start, count) {
  const newArray = [];
  const arrayLength = array.length;

  for (let i = start; i < arrayLength; i += 1) {
    if (i < start + count) {
      push(newArray, array[i]);
    } else {
      array[i] = array[i + count];
    }
  }

  array.length = arrayLength - newArray.length;
  return newArray;
}

const count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5)); // [ 3, 4, 5, 6, 7 ]
console.log(count); // [ 1, 2, 8 ]

/* Write a function named concat that accepts two Array arguments. The function
should return a new Array that contains the values from each of the original
Arrays.

You may use functions that were answers to previous practice problems to
complete this problem, but do not use any built-in Array methods. */

function concat(arr1, arr2) {
  const newArray = [];

  for (let i = 0; i < arr1.length; i += 1) {
    push(newArray, arr1[i]);
  }
  for (let i = 0; i < arr2.length; i += 1) {
    push(newArray, arr2[i]);
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]

/* Write a function named join that accepts two arguments: an Array and a
String. The function should coerce each value in the Array to a String, and
then join those values together using the second argument as a separator. You
may assume that a separator will always be passed.

You can call the String() function on any JavaScript value to get its String
representation. */

function join(array, separator) {
  let joined = '';

  for (let i = 0; i < array.length; i += 1) {
    joined += String(array[i]);

    if (i !== array.length - 1) {
      joined += separator;
    }
  }

  return joined;
}

console.log(join(['bri', 'tru', 'wha'], 'ck ')); // 'brick truck wha'
console.log(join([1, 2, 3], ' and ')); // '1 and 2 and 3'
