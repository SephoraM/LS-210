/**
 * Write a Function named octalToDecimal that performs octal to decimal conversion.
 * When invoked on a String that contains the representation of an octal number,
 * the Function returns a decimal version of that value as a Number. Implement the
 * conversion yourself: do not use something else to perform the conversion for you.
 */

// 1. split the string into an array, reverse the array
// 2. transform each element in the array to its integer representation
// 3. reduce the array to the sum of all integer * 10**index
// string => number that is the decimal conversion of an octal number given in string format
const octalToDecimal = octalString => octalString
  .split('')
  .reverse()
  .reduce((acc, num, idx) => acc + Number(num) * 8 ** idx, 0);

console.log(octalToDecimal('1')); // 1
console.log(octalToDecimal('10')); // 8
console.log(octalToDecimal('130')); // 88
console.log(octalToDecimal('17')); // 15
console.log(octalToDecimal('2047')); // 1063
console.log(octalToDecimal('011')); // 9
