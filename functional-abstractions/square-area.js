/**
 * For this practice problem, we'll represent rectangles as Arrays with two
 * elements: a height and a width.
 *
 * Write a Function named totalArea that takes an Array of rectangles as an
 * argument. The Function should return the total area covered by all the
 * rectangles.
 */

// 1. iterate over the array and transform each element into the multiplication
//    of each element in the inner array.
// 2. sum up the values of the new array of multiples
// 3. return sum
// array of arrays => number
// each inner array contains two numbers
const area = (height, width) => height * width;
const sumUp = (acc, val) => acc + val;
const totalArea = rectangles => rectangles.map(rectangle => area(...rectangle)).reduce(sumUp);

const rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles)); // 141

/**
 * Now, write a second Function named totalSquareArea. This Function should
 * calculate the total area of a set of rectangles, just like totalArea.
 * However, it should only include squares in its calculations: it should
 * ignore rectangles that aren't square.
 */
// 1. filter through the array of rectangles and return a new array of the
//    rectangles that are squares
// 2. call totalArea on the filtered array.
const isSquare = measurements => measurements[0] === measurements[1];
const totalSquareArea = measurements => totalArea(measurements.filter(isSquare));

console.log(totalSquareArea(rectangles)); // 121
