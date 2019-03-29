/**
 * Write a function that takes a string as an argument and returns true if the
 * string contains properly balanced parentheses, false otherwise. Parentheses
 * are properly balanced only when '(' and ')' occur in matching pairs, with
 * each pair starting with '('.
 */

// string => boolean
// all parentheses must have correctly matching parentheses
// remove everything from the string that is not a '(' or ')'
// if closing parentheses comes before its opening parens, return false
// if an opening parens does not have a closing parens, return false
const removeNonParens = string => string.replace(/[^()]/g, '');

const isBalanced = (string) => {
  const parens = removeNonParens(string);
  let count = 0;

  for (let i = 0; i < parens.length; i += 1) {
    if (parens[i] === '(') {
      count += 1;
    } else {
      count -= 1;
    }

    if (count < 0) return false;
  }

  return count === 0;
};
// Examples
console.log(isBalanced('What (is) this?')); // true
console.log(isBalanced('What is) this?')); // false
console.log(isBalanced('What (is this?')); // false
console.log(isBalanced('((What) (is this))?')); // true
console.log(isBalanced('((What)) (is this))?')); // false
console.log(isBalanced('Hey!')); // true
console.log(isBalanced(')Hey!(')); // false
console.log(isBalanced('What ((is))) up(')); // false
