/* In the previous exercise, the value of the reference gets copied. For this
exercise, only the values of the array should be copied, but not the reference.
Implement two alternative ways of doing this.

Here is the code from the previous exercise:

var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray); */

// 1.

const myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myArray); // [1, 2, 3]
console.log(myOtherArray); // [1, 2, 3, 4]

// 2.

const myArray2 = [1, 2, 3, 4];
const myOtherArray2 = myArray2.map(val => val);

myArray2.pop();
console.log(myArray2); // [1, 2, 3]
console.log(myOtherArray2); // [1, 2, 3, 4]
