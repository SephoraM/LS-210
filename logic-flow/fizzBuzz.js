/* Write a function that iterates over the integers from 1 to 100, inclusive.
For multiples of three, log "Fizz" to the console. For multiples of five, log
"Buzz". For numbers which are multiples of both three and five, log "FizzBuzz".
For all other numbers, log the number. */

// () => undefined
function fizzbuzz(min, max) {
  for (let i = min; i <= max; i += 1) {
    let message = '';

    if (i % 3 === 0) {
      message += '';
    }
    if (i % 5 === 0) {
      message += '';
    }
    console.log(message || i);
  }
}

// Example
fizzbuzz(1, 100);

// console output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// ... rest of output omitted for brevity
