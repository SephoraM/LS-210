/* In the following code, a user creates a person object literal and defines two
methods for returning the person's first and last names. What is the result when
the user tries out the code on the last line? */

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName()} ${person.lastName()}`);

// the methods are not invoked so the entire function is returned.

/* Discussion
Just like functions, object literal methods must be called by appending
parentheses (e.g., person.firstName()) in order to be executed. Function are
first class objects, so referencing the function name without the parentheses
would return the function itself, not the string representation: */
