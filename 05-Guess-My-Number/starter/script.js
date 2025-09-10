'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Hello';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 30;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Set the initial score
let score = 20;

// Add an event listener to the "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  // Get the user's guess from the input and convert it to a number
  let guess = Number(document.querySelector('.guess').value);

  // When there's no input (falsy value like 0, '', null)
  if (!guess) {
    document.querySelector('.message').textContent = '🚨 No Number!';

    // When player guesses the correct number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';

    // Increase the score on correct guess
    score++;
    document.querySelector('.number').textContent = secretNumber;

    // Update score display
    document.querySelector('.score').textContent = score;

    // Change background color and enlarge the number box
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '☝️ Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🚽 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🚽 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//  JS CHALLENGE # 1!

/*
          INSTRUCTIONS
  
Implement a game rest functionality, so rgar the player cab make anew guess!

1. Select the element with the 'againg' class and attach a click event handler
2. In the handler function, restore a initil values of the score and number variables
3. Restore the inicial conditions ofthe message, number, score and guess input field
4. Also restore the original background colo (#222) and number width (15rem)

*/
// Select the element with the 'againg' class and attach a click event handler

document.querySelector('.again').addEventListener('click', function () {
  //In the handler function, restore a initil values of the score and number variables

  // Reset SecretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset Score
  document.querySelector('.score').textContent = '20';

  // Restore the inicial conditions ofthe message, number, score and guess input field
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';

  // Restore the original background color, and number width
  // Reset background color
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
