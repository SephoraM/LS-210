// What does the following code log? Why is this so?

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

const totalPayable = (item, quantity) => startingBalance + item * quantity;

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));

// functions retain access to the enclosing scope; this means that variables
// declared in a functions outer scope are accessible to the function. The
// variable's value is not fixed at the time of function declaration, rather it
// is dynamic and when the function is invoked, the current value of the variable
// at that point in execution will be used.
