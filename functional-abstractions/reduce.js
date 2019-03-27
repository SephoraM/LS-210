/**
 * Write a function named myReduce that's similar to the
 * Array.prototype.reduce method. It takes an array and a function as arguments,
 * and optionally, a third argument that serves as an initial value. If the
 * caller omits the initial value, myReduce should use the first element of the
 * Array as the initial value. myReduce should return the value returned by the
 * last invocation of the callback function.
 */

function myReduce(array, func, initial = array[0]) {
  let result = initial;
  const arraySlice = result === array[0] ? array.slice(1) : array;

  arraySlice.forEach((elem) => {
    result = func(result, elem);
  });

  return result;
}

const smallest = function (result, value) {
  return result <= value ? result : value;
};

const sum = function (result, value) {
  return result + value;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest)); // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10)); // 49

// Let's implement a function that takes a list of words as an argument and
// returns the word with the most characters:

function longestWord(words) {
  return myReduce(words, longest);
}

const longest = function (result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

console.log(longestWord(['abc', 'launch', 'targets', ''])); // "targets"
