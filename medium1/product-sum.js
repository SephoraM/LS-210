/* The productOfSums function shown below is expected to return the product of
the sums of two arrays of numbers. Read through the following code. Will it
produce the expected result? Why or why not? */

function productOfSums(array1, array2) {
  let result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;
  let i;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// the last line of the function `total` does not return sum as is probably expected.
// Because nothing is explicitly returned, undefined will be implicitly returned;
// this means that when productOfSums is invoked, both calls to `total` will
// return undefined and when multiplied the result will be NaN. This is what will
// be returned be productOfSums. In addition to this problem, even if we were to
// return `sum` on the last line of the `total` function definition, it would be
// NaN because when `sum` was declared it was not given a default value which means
// it was initialized with the value of `undefined`. This means that on the first
// iteration of the loop, `sum` would be assigned the value of undefined + n, this
// will be a NaN value.
