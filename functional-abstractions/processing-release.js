// Write a Function named processReleaseData that processes the following movie release data:

const newReleases = [
  {
    id: 70111470,
    title: 'Die Hard',
    boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    title: 'The Chamber',
    boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: 'Fracture',
    boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

/**
 * The Function should generate an Array of Objects that contain only the id and
 * title key/value pairs. You may assume that id, when existing, is an integer
 * greater than 0. Here are the rules:
 *
 * Keep only releases that have both id and title data present.
 * Keep only the id and title data for each release.
 */
// 1. select the objects which have both a title and an id property
// 2. transform the filtered objects into objects which contain only the
//    title and id properties
// 3. return the new array of objects

const titleAndId = movie => ({
  id: movie.id,
  title: movie.title,
});

// array of objects => new array of objects
function processReleaseData(data) {
  return data.filter(obj => obj.id >= 0 && obj.title).map(titleAndId);
}

console.log(processReleaseData(newReleases));

// should return:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
