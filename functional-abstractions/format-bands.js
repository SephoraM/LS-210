// We have the following Array of information for some popular bands:

// var bands = [
//   { name: 'sunset rubdown', country: 'UK', active: false },
//   { name: 'women', country: 'Germany', active: false },
//   { name: 'a silver mt. zion', country: 'Spain', active: true },
// ];

/**
* There are problems with this data, though, so we first have to clean it up
* before we can use it:

* The band countries are wrong: all the bands should have 'Canada' as the
* country.
* The band name should have all words capitalized.
* Remove all dots from the band names.
* Write a function that can process the input band Array and return an Array
* that contains the fixed information:
*/

const bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

// 1. capitalize name function which splits a string into words and capitalizes them
// 2. for each object, return a new object with all the properties. The values for
// properties should be capitalized name if name, 'Canada' if country, others retain the same values
// 3. the array which is returned by processBands should have all objects transformed in this way

const capitalizeWord = (word) => {
  const letters = word.split('');
  return letters[0].toUpperCase() + word.slice(1);
};

const capitalizeName = name => name
  .split(' ')
  .map(capitalizeWord)
  .join(' ');

// array of objects => new array of objects
const processBands = data => data.map(band => ({
  name: capitalizeName(band.name.replace(/[.]/g, '')),
  country: 'Canada',
  active: band.active,
}));

console.log(processBands(bands));
console.log(bands);

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
