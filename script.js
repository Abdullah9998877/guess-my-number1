const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const numberElement = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');


let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


function displayMessage(message) {
  messageElement.textContent = message;
}

function updateScore(newScore) {
  scoreElement.textContent = newScore;
}


function updateHighscore(newHighscore) {
  highscoreElement.textContent = newHighscore;
}


function resetGame() {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  updateScore(score);
  guessInput.value = '';
  numberElement.textContent = '?';
}


function handleGuess() {
  const guess = parseInt(guessInput.value);

  
  if (!guess || guess < 1 || guess > 20) {
    displayMessage('⛔️ Invalid guess!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberElement.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      updateHighscore(highscore);
    }
  } else {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    score--;
    updateScore(score);
  }


  if (score === 0) {
    displayMessage('💥 You lost the game!');
  }
}


checkButton.addEventListener('click', handleGuess);


againButton.addEventListener('click', resetGame);


resetGame();
