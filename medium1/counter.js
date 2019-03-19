/* What will the following code snippets log? */

// Code Snippet 1
// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate)); // 15
//
// function counter(count) {
//   // ...
// }
// the function declaration of counter is hoisted to the top, then the variable
// declarations are hoisted up after that so the counter variable is reassigned
// to the value 5

// Code Snippet 2
// function counter(count) {
//   // ...
// }
//
// console.log('The total value is ' + String(counter * rate)); // NaN
//
// var counter = 5;
// var rate = 3;
// The reason NaN is logged to the console is that although the variable
// declarations have been hoisted to the top, the assignment hasn't yet occurred
// on line 20 so counter * rate is undefined * undefined which is not a number.
// undefined is how variables are initialized if they haven't been assigned a
// value.

// // Code Snippet 3
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate)); // 15

// This happens for the same reasons as stated for the first example.
