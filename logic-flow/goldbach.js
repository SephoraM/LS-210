/* Write a function named checkGoldbach() that uses Goldbach's Conjecture to log
every pair of primes that sum to the number supplied as an argument. The
conjecture states that "you can express every even integer greater than 2 as
the sum of two primes". The function takes as its only parameter, an integer n,
and logs all combinations of two prime numbers whose sum is n. Log the prime
pairs with the smaller number first. If n is odd or less than 4, your function
should log null.

Your checkGoldbach() function may call the isPrime() function you wrote for a
previous practice problem.
*/

function isPrime(number) {
  if (number < 2 || (number % 2 === 0 && number !== 2)) return false;

  for (let i = 3; i < number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(number) {
  if (number % 2 !== 0 || number < 4) {
    console.log(null);
  } else {
    if (number === 4) {
      console.log(2, 2);
    }
    for (let i = number - 1; i >= number / 2; i -= 2) {
      if (isPrime(i) && isPrime(number - i)) {
        console.log(number - i, i);
      }
    }
  }
}

// Example
checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
