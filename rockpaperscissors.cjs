const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while (true) {
  const playerChoice = prompt("Enter rock, paper of scissors (or q to quit): ");
  if (playerChoice.toLowerCase() === "q") {
    break;
  }

  if (
    playerChoice !== "rock" &&
    playerChoice !== "paper" && 
    playerChoice !== "scissors"
  ) {
    console.log("Valid choice not entered, try again.");
    continue;
  }

  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.round(Math.random() * 2);
  const computerChoice = choices[randomIndex];

  console.log("Computer chose: ", computerChoice);

  if (computerChoice === playerChoice) {
    console.log("Tie!");
    ties++;
  } else if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "papeer")
  ) {
    console.log('You Win!');
    wins++;
  } else {
    console.log("You Lose!");
    losses++;
  }
}

console.log("Wins:", wins, "Losses:", losses, "Ties:", ties);