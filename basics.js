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
returns their average. Call the function with three numbers and log the result.*/

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

let temperatures = [30, 36, 27, 40, 29, 32];

console.log(average(temperatures));
