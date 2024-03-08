let score = {
  wins: 0,
  loses: 0,
  ties: 0,
}

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

  movesElement.innerHTML = `You picked ${playerMove}, and computer picked ${computerMove}.`;
  scoreElement.innerHTML = `
    Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}
  `;
}