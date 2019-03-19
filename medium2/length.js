// Read through the code below. What values will be logged to the console? Can
// you explain these results?

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', <1 empty item> ]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', <2 empty items>]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['JavaScript', <1 empty item>, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3

// When you assign a new length to an array, if the new length is greater than
// the length of the array, the array will extend the length of the array to
// the new length implicitly assigning them the value undefined. If the new length
// is less than the array length, the array will be truncated to reflect the new
// length. If we assign a value to an index which is greater than the length of
// the string, the  array will extend the length of the array to the new length
// implicitly assigning the empty elements the value undefined. Arrays with
// 'empty slots' are sometimes referred to as 'sparse arrays'. You may see them
// represented in a variety of different ways.
