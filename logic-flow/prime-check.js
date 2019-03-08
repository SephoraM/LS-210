/* Write a function that takes a number argument, and returns true if the number
is prime, or false if it is not. You may assume that the input is always a
non-negative integer. */

// => number => boolean
// if number is prime, return true, else false

function isPrime(number) {
  if (number < 2 || (number % 2 === 0 && number !== 2)) return false;

  for (let i = 3; i < number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Example
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(43)); // true
console.log(isPrime(55)); // false
console.log(isPrime(0)); // false
