// input: two numbers which represent software version numbers. String?
//        the given numbers will have 0 or more points (.) between one or more digits
//        - starting with an integer
//        - terminating with an integer
// input edge cases: invalid data types?, empty string? Should the function accept numbers?
// output: digit (1, -1, or 0) representing whether or not the version1 is
//         greater, less than, or equal to version2, or null for invalid inputs
// rules:
// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character,
//  we should return null.
// If an empty string is given for one or both arguments return null.
// If no arguments are given or only one argument is given, return null;
// 0.1 < 1
// 1 = 1.0
// 1.0 < 1.1
// 1.1 < 1.2
// 1.2 = 1.2.0.0
// 1.2.0.0 < 1.18.2
// 1.18.2 < 13.78
// Data Structures:
// input: array of integers separated by the (.) as the delimiter, number operations
// output: number
// Algorithm:
// If the input is invalid by being an empty string, an undefined argument, or have invalid chars,
//  - return null
// split the given strings into arrays of integers using '.' as the delimiter
// transform the string elements into their number counterpart
// if the length of the arrays is not equal, push 0 to the end of the shorter array until they are
// iterate over the first argument's derived array, for each element:
//  - if the element at the current index > the element at the second array's current index:
//     - return 1
//  - if the element at the current index < the element at the second array's current index:
//     - return -1
// if the loop ends without determining a greater or less than result,
//  - return 0

const isNotValid = string => /[^\d.]|[.]{2}/gi.test(string) || !/^\d/.test(string) || !/\d$/.test(string);

// string, string => number
function compareVersions(version1, version2) {
  if (!version1 || !version2 || isNotValid(version1) || isNotValid(version2)) return null;

  const versionComponents1 = version1.split('.').map(Number);
  const versionComponents2 = version2.split('.').map(Number);
  const componentsLength = Math.max(versionComponents1.length, versionComponents2.length);
  let versionValue1 = 0;
  let versionValue2 = 0;

  for (let i = 0; i < componentsLength; i += 1) {
    versionValue1 = versionComponents1[i] || 0;
    versionValue2 = versionComponents2[i] || 0;

    if (versionValue1 > versionValue2) {
      return 1;
    }
    if (versionValue1 < versionValue2) {
      return -1;
    }
  }

  return 0;
}

// Examples:
console.log(compareVersions('0.1', '1')); // -1
console.log(compareVersions('1', '1.0')); // 0
console.log(compareVersions('1.0', '1.1')); // -1
console.log(compareVersions('1.1', '1.2')); // -1
console.log(compareVersions('1.2', '1.2.0.0')); // 0
console.log(compareVersions('1.18.2', '1.2.0.0')); // 1
console.log(compareVersions('13.78', '1.18.2')); // 1
console.log(compareVersions('13.a.55', '13.1.55')); // null
console.log(compareVersions('13.1,55', '13.1.55')); // null
console.log(compareVersions()); // null
console.log(compareVersions('', '1.2')); // null
console.log(compareVersions('1.2..5', '1.4.4')); // null
