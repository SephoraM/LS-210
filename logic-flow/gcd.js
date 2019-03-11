/* Create a function that computes the Greatest Common Divisor of two positive integers. */

// number, number => number
// return the number which is the greatest common divisor of the two given integers

function gcd(number1, number2) {
  const min = Math.min(number1, number2);
  const max = Math.max(number1, number2);

  return min === 0 ? max : gcd(max % min, min);
}

// Example
console.log(gcd(12, 4)); // 4
console.log(gcd(15, 10)); // 5
console.log(gcd(9, 2)); // 1

// Further Exploration

function gcdAll(numbers) {
  return numbers.reduce(gcd);
}

// Example
console.log(gcdAll([12, 4, 8])); // 4
