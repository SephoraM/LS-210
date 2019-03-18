/* What will the following code log to the console and why? Don't run the code
until after you have tried to answer. */

const array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];
let i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
// ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
// array2 doesn't point to the same object as array1.
// The first loop simply pushes the same values that array1 has into array2
// When the second loop mutates array1, array2 is not effected
// because the primitive values are not mutable. So, the indices in array1 are
// pointing to new primitive values when reassignment occurs.

/* What would happen if an object literal was part of the array1 elements pushed
to array2? Would changes made to the object literal in array1 be reflected in
array2? */

// Any changes made to objects stored in array1 will be mutatated in both arrays
// because when the first loop pushes an object element to the other array, it
// pushes the reference to the same object. So, if changes are made to the object,
// both arrays will see the change.

/* How would you change the code so that any changes made to array1 in the second
for loop get reflected to array2? */

// Instead of pushing each element in array1 to array2, I would simply have array2
// point to array1, this way both variables point to the same array object; changes
// in one will be reflected in the other.
