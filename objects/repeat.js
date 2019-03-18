/* Implement a function that takes a String as an argument and returns an object
that contains a count of the repeated characters. */

// string => object
// lower all characters in string
// iterate over each letter in the string
// if the letter is repeated 2 or more times in the string
// add to the object which will be returned
function repeatedCharacters(string) {
  const chars = string.toLowerCase().split('');
  const charObj = {};
  chars.forEach((char) => {
    charObj[char] = charObj[char] + 1 || 1;
  });

  Object.keys(charObj).forEach((key) => {
    if (charObj[key] === 1) {
      delete charObj[key];
    }
  });

  return charObj;
}

repeatedCharacters('Programming'); // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination'); // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet'); // {}
repeatedCharacters('Paper'); // { p: 2 }
repeatedCharacters('Baseless'); // { s: 3, e: 2 }

/* Note that repeatedCharacters does a bit more than simply count the frequency
of each character: it determines the counts, but only returns counts for
characters that have a count of 2 or more. It also ignores the case. */
