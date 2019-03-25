/**
 * You have written basic functions to display a random greeting to any number
 * of friends upon each invocation of greet. Upon invoking the greet function,
 * however, the output is not as expected. Figure out why not and fix the code.
 */

function randomGreeting() {
  const words = [
    'Hello',
    'Howdy',
    'Hi',
    'Hey there',
    "What's up",
    'Greetings',
    'Salutations',
    'Good to see you',
  ];

  const idx = Math.floor(Math.random() * words.length);

  return words[idx]; // missing return statement. Without it, the function returns undefined.
}

function greet() {
  const names = Array.prototype.slice.call(arguments);
  let i;

  for (i = 0; i < names.length; i += 1) {
    const name = names[i];
    const greeting = randomGreeting(); // another case of the function not being invoked

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');
