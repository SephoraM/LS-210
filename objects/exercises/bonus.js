/* The calculateBonus function calculates the bonus for a given salary. It makes
use of two arguments for determining the bonus: a salary amount and a boolean
switch. If the boolean is true, the bonus should be half of the salary;
otherwise the bonus should be 0. Fill in the blanks in the function so that it
will work, then explain why it works. */

// Examples:

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true)); // 1400
console.log(calculateBonus(1000, false)); // 0
console.log(calculateBonus(50000, true)); // 25000

// Here we are using the arguments object that is available to all Functions. It
// is an array-like object which is composed of all the arguments passed to the
// function. There doesn't need to be a parameter defined at all. It is not a
// real array but it does have access to the length property and you can use
// bracket notation to access each argument passed to the calling function.
