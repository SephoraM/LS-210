/**
 * Write a function that generates and returns an acronym from a string of words.
 * For example, the function should return "PNG" for the string "Portable Network Graphics".
 * Count compound words (words connected with a dash) as separate words.
 */

// string => string
// returned string represents the acronym based on the given strings words
// words can be separated by spaces or dashes
// take the first letter of every word and return in a new string
// separate the string into its word components
// transform each word into the first letter of the word
// combine the first letters into a new string
const acronym = string => string
  .split(/[- ]/g)
  .map(word => word[0].toUpperCase())
  .join('');

// Examples

console.log(acronym('Portable Network Graphics')); // "PNG"
console.log(acronym('First In, First Out')); // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor')); // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor')); // "CMOS"
console.log(acronym('Hyper-text Markup Language')); // "HTML"
