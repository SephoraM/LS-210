// What will the following program log to the console? Can you explain why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

// Any non-negative intgeger values that are used to assign a value are stored
// in the array object as properties. The length property only keeps track of
// elements -- elements are properties with a key which is a non-negative integer.
// Because both the elements and the other properties are all properties of the
// array object, when Object.keys is called on the array, it returns an array with
// all the keys (including the indexes). When we call length on the returned
// array, we get the combined length of the elements and the properties.
