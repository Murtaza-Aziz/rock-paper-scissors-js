const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const posibbileChoices = document.querySelectorAll("button");
let userChoice;

posibbileChoices.forEach((posibbileChoice) => {
  posibbileChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    compareChoices();
  });
});

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * posibbileChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function compareChoices() {
  if (userChoice === computerChoice) {
    resultDisplay.innerHTML = "It's a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      resultDisplay.innerHTML = "You win!";
    } else {
      resultDisplay.innerHTML = "You lose!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      resultDisplay.innerHTML = "You win!";
    } else {
      resultDisplay.innerHTML = "You lose!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      resultDisplay.innerHTML = "You win!";
    } else {
      resultDisplay.innerHTML = "You lose!";
    }
  }
}
