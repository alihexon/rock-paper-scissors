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

  movesElement.innerHTML = `You picked ${playerMove}, and computer picked ${computerMove}.`;
}