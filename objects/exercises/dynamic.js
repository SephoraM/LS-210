/* What will the following code log to the console and why? Don't run the code
until after you have tried to answer. */

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject.prop2 = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // '678'
console.log(myObject.prop2); // '456'

/* Further Exploration
Here is another example. What do you think will be logged to the console this
time, and why? */

const myObj = {}; // create an object using the object literal syntax
myObj[myFunc()] = 'hello, '; // assign a key, with the name which is the return
// value of the invocation of myFunc, to the value 'hello, '

function myFunc() {
  return 'funcProp'; // when invoked, the string 'funcProp' is returned
}

console.log(myObj); // { funcProp: 'hello, '}
myObj[myFunc()] = 'world!'; // this will reassign the key 'funcProp' to 'world!'
console.log(myObj); // { funcProp: 'world'}
