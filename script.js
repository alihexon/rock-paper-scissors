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

  if (playerMove === 'rock') {
    if (computerMove === 'scissors') {
      console.log('You won');
    } else if (computerMove === 'paper') {
      console.log('You lost');
    }
  }

  if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      console.log('You won');
    } else if (computerMove === 'scissors') {
      console.log('You lost');
    }
  }

  if (playerMove === 'scissors') {
    if (computerMove === 'paper') {
      console.log('You won');
    } else if (computerMove === 'paper') {
      console.log('You lost');
    }
  }

  if (playerMove === computerMove) {
    console.log('Tie');
  }
}