'use strict';

console.log('Game setup ready');

//===== DOM Element Selection - The Foundation
console.log(`=== DOM ELEMENT SELECTION`);

const messageEl = document.querySelector(`.message`);
console.log(messageEl);

console.log(messageEl.textContent);

// messageEl.textContent = `Hello from JavaScript`;

// access score class name

const scoreEl = document.querySelector(`.score`);

console.log('Score element:', scoreEl);

const numberEl = document.querySelector('.number');
// numberEl.textContent = 15;

const highscoreEl = document.querySelector('.highscore');

console.log('Current highscore:', highscoreEl.textContent);

const guessEl = document.querySelector('.guess');

// guessEl.value = 10;

console.log('Guess input value:', guessEl.value);

// Game State Variables

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Debugging
console.log('Secret Number:', secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized');

// craete these variable
// playerName attempts, gameActive
// and sdispaly to console

let playerName = 'Aiken';
let attempts = 0;
let gameActive = true;

console.log('Player:', playerName);
console.log('Attempts:', attempts);
console.log('Game Active:', gameActive);

// Basic Game Logic
document.querySelector('.check').addEventListener('click', function () {
  // code here
  console.log('Check button clicked!!!');

  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  // if you did not input any number or data sa input, show no number
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
    return;
  }

  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20';
    return;
  }

  if (guess === secretNumber) {
    console.log('Correct guess');
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = 'green';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.message').textContent = '🎉 You have won!!';
      // disabled guess input type
      document.querySelector('.guess').disabled = true;
      // disabled button click
      document.querySelector('.check').disabled = true;
    }
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too high!!!!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = 'You have lost!!!';
      document.querySelector('.number').textContent = secretNumber;
      // disabled guess input type
      document.querySelector('.guess').disabled = true;
      // disabled button click
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'red';
    }
  } else if (guess < secretNumber) {
    console.log('Too low');
    document.querySelector('.message').textContent = 'Too low!!!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = 'You have lost!!!';
      document.querySelector('.number').textContent = secretNumber;
      // disabled guess input type
      document.querySelector('.guess').disabled = true;
      // disabled button click
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('Again button is working!!!!');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('Your new secret number after restart:', secretNumber);
  document.querySelector('.message').textContent = 'Start quessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.body.style.backgroundColor = '';
});
