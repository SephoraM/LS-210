// 1.
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

/* Line 7 we invoke someFunction. In the body of the declaration of someFunction on
line 4, the variable myVar is declared and initialized to the value 'this is local'.
This declaration of a new variable with the name myVar shadows the variable of the
 same name in the outer scope and creates a new variable scoped to the function.
 undefined is implicitly returned. Execution jumps back to line 8 where console.log()
 is invoked with myVar passed in as an argument. 'This is global' is printed to
 the console. */

// 2.
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction(); // -> This is local

/* On line 27, we invoke someFuction. This takes us to the body of the function
declaration on line 23 where the myVar variable is declared and initialized.
On line 24 console.log is invoked with myVar passed in as an argument. Because
myVar is declared within the function it has local scope and hides the variable
of the same name in the outer scope. This is called variable shadowing. */

// 3.
var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar); // -> This is local

/* On line 36, we declare the variable myVar and initialize it with a string value.
On line 38, we declare a function someFunction. Within the body of the function, on
line 39, we reassign the variable myVar. When someFuction is called on line 42, the
reassignment of variable myVar is executed and the variable myVar which exists in
the global scope is reassigned which explains why 'this is local' is printed to
the console. */

// 4.
var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction(); // -> This is global

/* myVar is in the outer scope of someFuction which means it can access it. */

// 5.
function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar); // -> This is global

/* The reason for this is because when someFunction is called, and execution
goes to the body of the function, myVar is assigned a value. JavaScript sees this
and searches the current scope for the declaration statement, and when it cannot
find it searches the surrounding scope (it will continue to do this until it
reaches the global scope). Upon reaching the global scope, if the variable declaration
has not been found, a global variable of that name is created (JavaScript binds
myVar to be a "property" of the global object. This is "almost" the same as if
myVar was globally declared.). This explains how it can be assigned a value inside
of the function's local scope and be accessable in the global scope.  */

// 6.
var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a); // -> 7

/* when the variable a is passed as an argument to myValue it is passed as a
value and not as a reference; this means that b is assigned to the value that
a holds. a is not reassigned.*/

// 7.
var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a); // -> 7

/* When a parameter has the same name as a variable in the outer scope it hides
the outer variable in what is called variable shadowing. When a parameter is
included in a function definition, it is a variable declaration which is only
initialized when an argument is passed in upon function invocation. */

// 8.
var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a); // -> [1, 2, 10]

/* arrays are not primitive values, they are passed by reference rather than by values;
what this means in practical terms is that the elements within an array can be changed i.e.,
they are mutable. cd */

// 9.
console.log(a); // -> undefined

var a = 1;

/* Although the variable declaration of a is hoisted to the top of the scope,
the assignment occurs below the call to console.log with a passed in as an
argument. JavaScript gives the value of undefined to variable declarations that
have not yet been assigned a value. (The JavaScript interpreter doesn't
"immediately" execute all of a program's code line by line. Instead, it first
goes over the code to find and associate variable declarations with their
appropriate scope. Visually, this is as if JavaScript moves (or "hoists") each
variable declaration to the top of its scope. The assignment operation,
however, is not hoisted.) */

// 10.
logValue(); // -> Hello, world!

function logValue() {
  console.log('Hello, world!');
}

/* The function declaration is hoisted to the top of the scope, along with the
body of the function. What this means is that the call to logValue will produce
the same result as calling the function below the function declaration.  */

// 10. further exploration
var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue); // -> string

/* When hoisting occurs, function declarations are placed at the top of the scope
and then variable declarations are placed below them. When the variable declaration
logValue is hoisted to the top, it is placed below the declaration of the function
myValue which causes the program to ignore the body of the function declaration
and reassign the variable myValue to the string value 'foo'. */
