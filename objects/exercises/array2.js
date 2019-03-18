/* A user wrote a function that takes an array as an argument and returns its
average. Given the code below, the user expects the average function to return
5. Is the user's expectation correct? Why or why not? */

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;
  let i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / Object.keys(array).length;
}

console.log(average(myArray)); // 10
// The length of the array is the number of elements, not the number of properties;
// An element is a value whose key is a non-negative integer so the last two
// numbers which have been assigned values at a negative index are properties, not
// indexed elements. The length property only counts indexed elements, not all
// the properties; this seems to be accounted for in the loop when the condition
// has the loop end 1 element before array.length but the last expression which
// divides the sum by array.length fails to consider the properties that were
// included in the loop by starting at -2. The sum should be divided by 4, not 2
