/* Write a function that takes a number of rows as the argument n and logs a
square of numbers and asterisks. For example, if n is 7, log the following
pattern:

You may assume that n is greater than 1 and less than 10. */

// number => undefined
// side effect: log pattern consisting of 1 to given number of rows with each
// row displaying the numbers up to current number with * to fill out
// empty number spaces

function generatePattern(number) {
  for (let i = 1; i <= number; i += 1) {
    let pattern = '';

    for (let j = 1; j <= i; j += 1) {
      pattern += j.toString();
    }

    for (let k = i; k < number; k += 1) {
      pattern += k >= 9 ? '**' : '*';
    }
    console.log(pattern);
  }
}

generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

generatePattern(20);
