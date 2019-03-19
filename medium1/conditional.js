/* The following program is expected to log each number between 0 and 9
(inclusive) that is a multiple of 3. Read through the code shown below. Will
it produce the expected result? Why or why not? */

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// This will not produce the expected result. It will instead be stuck in an
// infinite loop the first time that the conditional is true because the
// iterator is only incrementing when the condition does not pass
