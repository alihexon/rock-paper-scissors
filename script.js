let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

if (score) {
  let scoreElement = document.querySelector(".score");
  scoreElement.innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
}

document
  .querySelector(".rock-btn")
  .addEventListener("click", () => playGame("rock"));
document
  .querySelector(".paper-btn")
  .addEventListener("click", () => playGame("paper"));
document
  .querySelector(".scissors-btn")
  .addEventListener("click", () => playGame("scissors"));
document
  .querySelector(".reset-btn")
  .addEventListener("click", () => openModal());
document
  .querySelector(".autoplay-btn")
  .addEventListener("click", () => autoPlay());

document.body.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "r":
      playGame("rock");
      break;
    case "p":
      playGame("paper");
      break;
    case "s":
      playGame("scissors");
      break;
    case "a":
      autoPlay();
      break;
    case "backspace":
      openModal();
      break;
    case "y":
      if (modalElement.classList.contains("on")) closeModal("yes");
      break;
    case "n":
      if (modalElement.classList.contains("on")) closeModal("no");
      break;
  }
});

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let resultElement = document.querySelector(".result");
  let movesElement = document.querySelector(".moves");
  let scoreElement = document.querySelector(".score");
  let errorElement = document.querySelector(".error");

  if (playerMove === "rock") {
    if (computerMove === "scissors") {
      resultElement.innerHTML = "You won";
    } else if (computerMove === "paper") {
      resultElement.innerHTML = "You lost";
    }
  }

  if (playerMove === "paper") {
    if (computerMove === "rock") {
      resultElement.innerHTML = "You won";
    } else if (computerMove === "scissors") {
      resultElement.innerHTML = "You lost";
    }
  }

  if (playerMove === "scissors") {
    if (computerMove === "paper") {
      resultElement.innerHTML = "You won";
    } else if (computerMove === "rock") {
      resultElement.innerHTML = "You lost";
    }
  }

  if (playerMove === computerMove) {
    resultElement.innerHTML = "Tie";
  }

  if (resultElement.innerHTML === "You won") {
    score.wins++;
  } else if (resultElement.innerHTML === "You lost") {
    score.loses++;
  } else if (resultElement.innerHTML === "Tie") {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  movesElement.innerHTML = `You <img src="assets/${playerMove}-emoji.png" class="move"> Computer <img src="assets/${computerMove}-emoji.png" class="move">`;
  scoreElement.innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
  errorElement.innerHTML = "";
}

isAutoPlaying = false;
let intervalId;

function autoPlay() {
  const playerMove = pickComputerMove();
  let autoPlayElement = document.querySelector(".autoplay-btn");

  if (!isAutoPlaying) {
    autoPlayElement.innerHTML = "Stop playing";
    isAutoPlaying = true;
    intervalId = setInterval(() => {
      playGame(playerMove);
    }, 1000);
  } else {
    autoPlayElement.innerHTML = "Auto Play";
    isAutoPlaying = false;

    clearInterval(intervalId);
  }
}

function resetScore() {
  let scoreElement = document.querySelector(".score");
  let errorElement = document.querySelector(".error");

  if (scoreElement.innerHTML === "") {
    errorElement.innerHTML = "There's no score to reset.";
  } else {
    score = { wins: 0, loses: 0, ties: 0 };
    scoreElement.innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
  }
  localStorage.setItem("score", JSON.stringify(score));
}

const modalElement = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");

function openModal() {
  modalElement.classList.add("on");
  modalOverlay.classList.add("overlay-on");
}

document
  .querySelector(".reset-btn")
  .addEventListener("click", () => openModal());

function closeModal(decision) {
  if (decision === "yes") {
    resetScore();
  } else if (decision === "no") {
    modalElement.classList.remove("on");
    modalOverlay.classList.remove("overlay-on");
    return;
  }
  modalElement.classList.remove("on");
  modalOverlay.classList.remove("overlay-on");
}
