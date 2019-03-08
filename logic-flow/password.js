// password = 'password'

// The program displays a dialog that asks the user to enter a password.
// If the user enters the wrong password, keep asking up to three times. After
// three failures, log the access denied.
const RL_SYNC = require('readline-sync');

const PASSWORD = 'password';

function promptPassword() {
  return RL_SYNC.question('What is the password: ');
}

function guessPassword(numberOfGuesses) {
  if (numberOfGuesses === 0) {
    console.log('You have been denied access.');
    return;
  }
  const password = promptPassword();

  if (password === PASSWORD) {
    console.log('You have successfully logged in.');
    return;
  }
  guessPassword(numberOfGuesses - 1);
}

guessPassword(3);

// What is the password: 123
// What is the password: opensesame
// What is the password: letmein

// message on the console
// You have been denied access.

// If the user enters the right password, report login success.
// What is the password: password

// message on the console
// You have successfully logged in.
