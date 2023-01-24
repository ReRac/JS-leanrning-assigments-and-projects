"use strict";
// const invitation = prompt("Choose rock, paper or scissors 😃!");
let userInput = prompt("Please enter rock, paper or scissors! ");

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "scissors";
  } else randomChoice === 2;
  return "paper";
};

const getPlayerChoice = (userInput) => {
  if (userInput.toLowerCase() === "rock") {
    return userInput;
  } else if (userInput.toLowerCase() === "paper") {
    return userInput;
  } else if (userInput.toLowerCase() === "scissors") {
    return userInput;
  } else {
    return "Input is not valid, you don not fool me mister";
  }
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Same decision - boring...";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "The computer wins!";
    } else {
      return "You won!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "The computer wins!";
    } else {
      return "You won!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "The computer wins!";
    } else {
      return "You won!";
    }
  }
}

for (let game = 1; game <= 5; game++) {
  const playerSelection = userInput;
  const computerSelection = getComputerChoice();
  console.log(
    `Mr. Computer says ${computerSelection}, kind human says ${playerSelection} -  ${playRound(
      playerSelection,
      computerSelection
    )}`
  );
}
