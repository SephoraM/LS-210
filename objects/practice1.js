/* Write a function named objectHasProperty that takes two arguments: an Object
and a String. The function should return true if the Object contains a property
with the name given by the String, false otherwise. */

function objectHasProperty(obj, key) {
  return Object.keys(obj).includes(key);
}

const pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog'); // true
objectHasProperty(pets, 'lizard'); // false
objectHasProperty(pets, 'mice'); // true

/* Write a function named incrementProperty that takes two arguments: an Object
and a String. If the Object contains a property with the specified name, the
function should increment the value of that property. If the property does not
exist, the function should add a new property with a value of 1. The function
should return the new value of the property. */

function incrementProperty(obj, key) {
  obj[key] = obj[key] + 1 || 1;
  return obj[key];
}

const wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie'); // 5
wins; // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy'); // 1
wins; // { steve: 3, susie: 5, lucy: 1 }

/* Write a function named copyProperties that takes two Objects as arguments.
The function should copy all properties from the first object to the second.
The function should return the number of properties copied. */

function copyProperties(source, destination) {
  const keys = Object.keys(source);

  keys.forEach((key) => {
    destination[key] = source[key];
  });

  return keys.length;
}

const hal = {
  model: 9000,
  enabled: true,
};

const sal = {};
copyProperties(hal, sal); // 2
sal; // { model: 9000, enabled: true }

/* Write a function named wordCount that takes a single String as an argument.
The function should return an Object that contains the counts of each word that
appears in the provided String. In the returned Object, you should use the words
as keys, and the counts as values. */

function wordCount(string) {
  const words = string.split(' ');
  const count = {};

  words.forEach((word) => {
    count[word] = count[word] + 1 || 1;
  });

  return count;
}

wordCount('box car cat bag box'); // { box: 2, car: 1, cat: 1, bag: 1 }
