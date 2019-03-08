// number => undefined
// take given number and log all odd number from 1 to passed in number inclusive
// All numbers should be logged on separate lines.
function logOddNumbers(n) {
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
}

// Example
logOddNumbers(19);
/* ->
1
3
5
7
9
11
13
15
17
19
*/
