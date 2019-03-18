/* What will the following code log to the console and why? Don't run the code
until after you have tried to answer. */

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // a
console.log(myArray[-1]); // undefined

myArray[-1] = 'd'; // myArray has a new property '-1': 'd'
myArray.e = 5; // myArray has a new property 'e': 5
myArray[3] = 'f'; // a new element is added to the array at the 3rd index with
// the value of 'f'

console.log(myArray[-1]); // d
console.log(myArray.e); // 5
console.log(myArray); // ['a', 'b', 'c', '-1': 'd', 'e': 5]
