/* Write a function that logs the integers from 1 to 100 (inclusive) that are
multiples of either 3 or 5. If the number is divisible by both 3 and 5, append
an "!" to the number. */

// () => undefined
// log all integers from 1 to 100 that are multiples of 3 or 5. if divisible by
// three and five append '!' to number
function multiplesOfThreeAndFive(number1, number2) {
  for (let i = number1; i <= number2; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}!`);
      } else {
        console.log(i);
      }
    }
  }
}

// Example
multiplesOfThreeAndFive(1, 100);

// output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// ... remainder of output omitted for brevity
