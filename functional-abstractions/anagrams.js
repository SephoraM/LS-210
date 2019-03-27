/**
 * Write a Function named anagram that takes two arguments: a word and an array
 * of words. Your function should return an array that contains all the words
 * from the array argument that are anagrams of the word argument. For example,
 * given the word "listen" and an array of candidate words like "enlist",
 * "google", "inlets", and "banana", the program should return an array that
 * contains "enlist" and "inlets".
 */

// 1. sort the word
// 2. sort all words in the array
// 3. return an array which has all the sorted elements that match the sorted word
const sortWord = word => word
  .split('')
  .sort()
  .join('');

// string, array => array
const anagram = (word, list) => {
  const sortedWord = sortWord(word);

  return list.filter(elem => sortedWord === sortWord(elem));
};

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana'])); // [ "enlist", "inlets" ]
