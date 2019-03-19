/* Read through the following code. Currently, it does not log the expected
result. Explain why this happens, then refactor the code so that it works as
expected. */

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson); // false -- expected: true
// When otherPerson is declared and assigned a value, it is assigned a new object
// that just happens to have the same values as person. When we compare two objects
// in JavaScript, JavaScript will only return true if they are the same object
// (i.e., they hold the same place in memory). The way to make otherPerson point
// to the same object as person is to assign the value person to the otherPerson
// variable
