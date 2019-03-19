/* The getSelectedColumns function selects and extracts specific columns to a
new array. Currently, the function is not producing the expected result. Go
over the function and the sample runs shown below. What do you think the
problem is? */

function getSelectedColumns(numbers, cols) {
  const result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]); // [[1]];            expected: [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]); // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]); // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

// Solution
// The problem is that the length variable is reassigned a new value in the second loop.
//
// Discussion
// The intention of declaring the variable length is to save on repetitive calls to the .length property. However, at the same time as the length variable is being "declared" in the second (inner) loop, the length variable in the first (outer) loop is actually being reassigned. This behavior is caused by the fact that "blocks" do not create a new scope in JavaScript. Even though there is a second variable declaration for length, a new variable is not created. After hoisting, the two declarations become one and the same, effectively making the second a reassignment.
//
// // after hoisting
function getSelectedColumns(numbers, cols) {
  var result = [];
  var length;
  var i;
  var j;

  for (i = 0, length = numbers.length; i < length; i += 1) {
    for (j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}
// To resolve this, we just have to rename one of the length variables.

// Possible Solution
function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, lengthOuter = numbers.length; i < lengthOuter; i += 1) {
    for (var j = 0, lengthInner = cols.length; j < lengthInner; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}
