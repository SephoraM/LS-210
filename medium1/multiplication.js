/* The following program is expected to log a multiplication table for the
numbers from 1 to 10 to the console. Read through the code shown below.
Will it produce the expected result? Why or why not? */

let row;
let i;
let j;

function padLeft(number) {
  const stringNumber = String(number);
  return stringNumber.length <= 1 ? ` ${stringNumber}` : stringNumber;
}

for (i = 1; i < 10; i += 1) {
  row = '';
  for (j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(`${row}\n`);
}

// The issue here is that the outer for loop will stop at 9 so we'll never
// get the 10th times table
