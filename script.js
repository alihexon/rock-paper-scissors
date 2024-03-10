let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0, };

if (score) {
  let scoreElement = document.querySelector('.score');
  scoreElement.innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
}

document.querySelector('.rock-btn')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.paper-btn')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.scissors-btn')
  .addEventListener('click', () => {
    playGame('scissors');
  });

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
      playGame('rock')
    }
  });

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'p') {
      playGame('paper')
    }
  });

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 's') {
      playGame('scissors')
    }
  });

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock'
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper'
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors'
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let resultElement = document.querySelector('.result');
  let movesElement = document.querySelector('.moves');
  let scoreElement = document.querySelector('.score');
  let errorElement = document.querySelector('.error');

  if (playerMove === 'rock') {
    if (computerMove === 'scissors') {
      resultElement.innerHTML = 'You won';
    } else if (computerMove === 'paper') {
      resultElement.innerHTML = 'You lost';
    }
  }

  if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      resultElement.innerHTML = 'You won';
    } else if (computerMove === 'scissors') {
      resultElement.innerHTML = 'You lost';
    }
  }

  if (playerMove === 'scissors') {
    if (computerMove === 'paper') {
      resultElement.innerHTML = 'You won';
    } else if (computerMove === 'rock') {
      resultElement.innerHTML = 'You lost';
    }
  }

  if (playerMove === computerMove) {
    resultElement.innerHTML = 'Tie';
  }

  if (resultElement.innerHTML === 'You won') {
    score.wins++;
  } else if (resultElement.innerHTML === 'You lost') {
    score.loses++;
  } else if (resultElement.innerHTML === 'Tie') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  movesElement.innerHTML = `You picked ${playerMove}, and computer picked ${computerMove}.`;
  scoreElement.innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
  errorElement.innerHTML = '';
}

isAutoPlaying = false;
let intervalId;

document.querySelector('.autoplay-btn')
  .addEventListener('click', () => {
    const playerMove = pickComputerMove();
    let autoPlayElement = document.querySelector('.autoplay-btn');
  
    if (!isAutoPlaying) {
      autoPlayElement.innerHTML = 'Stop playing';
      isAutoPlaying = true;
      intervalId = setInterval(() => {
        playGame(playerMove);
      }, 1000);
    } else {
      autoPlayElement.innerHTML = 'Auto Play';
      isAutoPlaying = false;
  
      clearInterval(intervalId)    
    } 
  })

document.querySelector('.reset-btn')
  .addEventListener('click', () => {
    let scoreElement = document.querySelector('.score');
    let errorElement = document.querySelector('.error');
  
    if (scoreElement.innerHTML === '') {
      errorElement.innerHTML = "There's no score to reset.";
    } else {
      score = { wins: 0, loses: 0, ties: 0, }
      scoreElement.innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
    }
  });