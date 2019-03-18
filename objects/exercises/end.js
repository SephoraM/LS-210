/* The penultimate function takes a string as an argument and returns the
next-to-last word in the string. The function assumes that "words" are any
sequence of non-whitespace characters. The function also assumes that the input
string will always contain at least two words. The penultimate function in the
example below does not return the expected result. Run the code below, check
the current result, identify the problem, explain what the problem is, and
provide a working solution. */

// The problem with the orginal solution is that the function description is
// using -2 to access the second-to-last element -- this is not going to work and
// will return undefined instead. What is happening here is that the value
// of the property with the key -2 will be returned; since that doesn't exist, it
// will  return undefined. The way to fix this is to access the element at the
// length of the array - 2
// Examples:

function penultimate(string) {
  const array = string.split(' ');
  return array[array.length - 2];
}

penultimate('last word'); // expected: "last"
penultimate('Launch School is great!'); // expected: "is"
