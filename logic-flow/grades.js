// Write a program to determine a student’s grade based on the average of three
// scores you get from the user. Use these rules to compute the grade:
//
// If the average score is greater than or equal to 90 then the grade is 'A'
// If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
// If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
// If the average score is less than 50 then the grade is 'F'
// You may assume that all input values are valid positive integers.

// - ask the user for three numbers. calculate average of the given inputs
// - log message with average
const RL_SYNC = require('readline-sync');

function sum(arr) {
  return arr.reduce((acc, val) => acc + val);
}

function average(scores) {
  return sum(scores) / 3;
}

function promptUser() {
  return RL_SYNC.question('Enter score: ');
}

function determineGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 70) return 'B';
  if (score >= 50) return 'C';
  return 'F';
}

const scores = [];
let userInput = '';

do {
  userInput = promptUser();
  scores.push(parseInt(userInput, 10));
} while (userInput); // if user doesn't give a value, it ends

const finalGrade = determineGrade(average(scores));

console.log(`Based on the average of your 3 scores your letter grade is ${finalGrade}.`);

// Example
// prompts to get the 3 scores
// Enter score 1: 90
// Enter score 2: 50
// Enter score 3: 78

// log to the console
// Based on the average of your 3 scores your letter grade is "B".
