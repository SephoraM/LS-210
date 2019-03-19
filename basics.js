/*
  Arithemtic Integer

var number1 = parseInt(prompt("Enter the first number:"), 10);
var number2 = parseInt(prompt("Enter the second number:"), 10);

console.log(number1 + " + " + number2 + " = " + (number1 + number2));
console.log(number1 + " - " + number2 + " = " + (number1 - number2));
console.log(number1 + " * " + number2 + " = " + number1 * number2);
console.log(number1 + " / " + number2 + " = " + Math.floor(number1 / number2));
console.log(number1 + " % " + number2 + " = " + (number1 % number2));
console.log(number1 + " ** " + number2 + " = " + Math.pow(number1, number2));
*/

/*
Counting the number of characters
*/

/* let phrase = prompt("Please enter a phrase: ");
let alphabeticLength = phrase.replace(/[^a-z]/gi, "").length;

console.log(`There are ${alphabeticLength} alphabetic characters in ${phrase}`); */

/* Practice Problems: Functions */

/* We need a piece of reusable code that returns the average of three numbers.
Define a function named average that takes three parameters, a, b, and c, and
returns their average. Call the function with three numbers and log the result. */

// number, number, number => number

function averageThree(a, b, c) {
  return (a + b + c) / 3;
}

console.log(averageThree(2, 3, 6));

/* We now need a function that calculates the sum of the same three values.
 Create a function named sum that takes the same three arguments as average, and
 returns the sum of the three arguments. Now modify average to call the sum
 function with those three arguments and use the return value to calculate the
 average. */

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  return total;
}

/* Suppose we have a different number of values from which to calculate
an average. */

function average(arr) {
  return sum(arr) / arr.length;
}

console.log(average([2, 3, 6, 2, 3, 6]));

const temperatures = [30, 36, 27, 40, 29, 32];

console.log(average(temperatures));

/* For this exercise we're going to learn more about type conversion by
implementing our own parseInt function that converts a string of numeric
characters (including an optional plus or minus sign) to a number.

The function takes a string of digits as an argument, and returns the
appropriate number. Do not use any of the built-in functions for converting a
string to a number type.

For now, do not worry about leading + or - signs, nor should you worry about
invalid characters; assume all characters will be numeric. */

// string => number
// we can't use any of the built-in methods and the assumption here is that we
// can't use an operator which will implicitly coerce the string to a number
// what we do then is build an object which stores every integer and use the
// str chars as keys to access their corresponding number values
const INTEGERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function stringToInteger(str) {
  const digits = str.split('').reverse();
  let multiplier = 1;
  let result = 0;

  digits.forEach((digit) => {
    result += INTEGERS[digit] * multiplier;
    multiplier *= 10;
  });

  return result;
}

// Examples:

stringToInteger('4321'); // 4321
stringToInteger('570'); // 570

/* The previous exercise mimics the parseInt function to a lesser extent. In
this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits, and returns the appropriate
number as an integer. The string may have a leading + or - sign; if the first
character is a +, your function should return a positive number; if it is a -,
your function should return a negative number. If there is no sign, return a
positive number.

You may assume the string will always contain a valid number. */

function stringToSignedInteger(str) {
  const sign = str[0];
  if (sign === '-') {
    return -stringToInteger(str.slice(1));
  }
  if (sign === '+') {
    return stringToInteger(str.slice(1));
  }
  return stringToInteger(str);
}

// Examples:

stringToSignedInteger('4321'); // 4321
stringToSignedInteger('-570'); // -570
stringToSignedInteger('+100'); // 100

/* In the previous two exercises, you developed functions that convert simple
numeric strings to signed integers. In this exercise and the next, you're going
to reverse those functions.

You will learn more about converting strings to numbers by writing a function
that takes a positive integer or zero, and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript,
such as String(), Number.prototype.toString, or an expression such as '' + number.
Your function should do this the old-fashioned way and construct the string by
analyzing and manipulating the number. */
const STRING_INTEGERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// number => string
function integerToString(number) {
  const stringyNumbers = [];

  while (number > 0) {
    stringyNumbers.push(STRING_INTEGERS[number % 10]);
    number = Math.floor(number / 10);
  }

  return stringyNumbers.reverse().join('') || '0';
}

// Examples:

integerToString(4321); // "4321"
integerToString(0); // "0"
integerToString(5000); // "5000"

/* In the previous exercise, you reimplemented a function that converts
non-negative numbers to strings. In this exercise, you're going to extend that
function by adding the ability to represent negative numbers.

You may not use any of the standard conversion functions available in JavaScript,
such as String(), Number.prototype.toString, or an expression such as '' + number.
You may, however, use the integerToString function from the previous exercise. */

function signedIntegerToString(number) {
  if (number < 0) {
    return `-${integerToString(Math.abs(number))}`;
  } if (number > 0) {
    return `+${integerToString(number)}`;
  }
  return '0';
}

// Examples:

signedIntegerToString(4321); // "+4321"
signedIntegerToString(-123); // "-123"
signedIntegerToString(0); // "0"
