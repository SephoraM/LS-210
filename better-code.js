/**
 * Identify the code that violates the Airbnb JavaScript style guide, and update
 * the code to fix the issues you identify. There may be more than one issue in
 * each code snippet.
 */

// 1. var title = "The Three-Body Problem";
// -> let title = 'The Three-Body Problem';
// -> Airbnb states that we should use single quotes rather than double quotes
//    unless we are using a single quote within the string.

// 2.
/**
 * var title = 'The Three-Body Problem',
 *   author = 'Cixin Liu',
 *   page_count = 400;
 */
// let title = 'The Three-Body Problem';
// let author = 'Cixin Liu';
// let  pageCount = 400;
// Each variable declaration should be separate from the others. This will make
// the possiblity of errors because of misplaced commas or semi-colons to cause
// bugs. It also makes the intention more clear. camelCase is also prefered over
// snake_case for variable names.

// 3.
/**
 * var completed = lastPageRead == 400;
 */
// const completed = lastPageRead === 400;
// Use strict equality.

// 4.
/**
 * if (finishedBook())
 *  console.log('You have finished reading this book');
 */
// if (finishedBook()) {
//   console.log('You have finished reading this book');
// }
// If we have a multi-line statement, we should use curly braces.

// 5.
/**
 * function read(pages) {
 *       console.log('You started reading.');
 *       for (var i=0; i<pages; i++) {
 *               var message = 'You read page '+i;
 *               console.log(message);
 *       }
 * }
 *
 * read(400);
 */
// there are some serious spacing issues in this function. Also, the use of i++
// is not recommended. A template literal is also preferable as is the use of
// let or const. If var is used, it should be declared at the beginning of it's
// scope. A function expression is preferable to a function declaration. If we
// were not using a template literal, it would be best to explicitly coerce the
// number to a string with String(i).
const read = function readPages(pages) {
  console.log('You started reading.');
  for (let i = 0; i < pages; i += 1) {
    const message = `You read page ${i}`;
    console.log(message);
  }
};

read(400);
