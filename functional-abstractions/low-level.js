/**
 * Implement a function that determines whether a string has any character that
 * appears more than once. The function should return true if, and only if, all
 * characters in the string are unique. We should ignore multiple spaces and
 * case differences; focus instead on the non-space characters without regard
 * to case.
 */

// Examples
// function isAllUnique(string) {
//   const seen = {};
//   const lowerCasedString = string.toLowerCase();
//
//   for (let i = 0; i < lowerCasedString.length; i += 1) {
//     if (lowerCasedString[i] === ' ') {
//       continue;
//     }
//
//     if (seen[lowerCasedString[i]]) {
//       return false;
//     }
//     seen[lowerCasedString[i]] = true;
//   }
//
//   return true;
// }

const isAllUnique = (string) => {
  const lowerCasedString = string.toLowerCase();

  for (let i = 0; i < string.length; i += 1) {
    const char = lowerCasedString[i];
    if (lowerCasedString.slice(i + 1).indexOf(char) !== -1 && char !== ' ') return false;
  }
  return true;
};

isAllUnique('The quick brown fox jumped over a lazy dog'); // false
isAllUnique('123,456,789'); // false
isAllUnique('The big apple'); // false
isAllUnique('The big apPlE'); // false
isAllUnique('!@#$%^&*()'); // true
isAllUnique('abcdefghijklmnopqrstuvwxyz'); // true
