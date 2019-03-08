/* Write a function logMultiples that takes one argument number. It should log
all multiples of the argument between 0 and 100 (inclusive) that are also odd
numbers. Log the values in descending order.
You may assume that number is an integer between 0 and 100. */

// number => undefined
// log: multiples of number between 0 and 100 that are odd in descending order
function logMultiples(num) {
  const maxMultiple = Math.floor(100 / num) * num;

  for (let i = maxMultiple; i >= num; i -= num) {
    if (i % num === 0 && !(i % 2 === 0)) {
      console.log(i);
    }
  }
}

// Example
logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// output (3x and 1x)
// 63
// 21
