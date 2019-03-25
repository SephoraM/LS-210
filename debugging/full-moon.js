/**
 * Run the following code. Why is every warning displayed twice? Change the code
 * so that each warning is displayed only once, as intended.
 */

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

let i;
for (i = 0; i < species.length; i += 1) {
  const thisSpecies = species[i];
  let newSpecies; // This was happening because of how variables declared with
  // var are hoisted to the top of their scope. Because these variables are not
  // block scoped, the variable is declared outside of the scope of the for
  // loop which means that when the loop continues through its iterations, it
  // does not declare the variable; instead the variable still has the value of
  // the last iteration upon which it was assigned a value.

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}
