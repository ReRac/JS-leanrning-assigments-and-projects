"use strict";

let userInput = prompt("Please enter rock, paper or scissors! ");

// Computer will randomly choose rock, paper  or scissors in game, coded
//by Reda Ra 2023-01-23
const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "scissors";
  } else randomChoice === 2;
  return "paper";
};

//Returning user game choice input in the code, in the game,
//coded by Reda Ra 2023-01-23
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

// Created game round for computer and player choices, coded
//by Reda Ra 2023-01-23
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
// created loop with 5 rounds of the game, coded
//by Reda Ra 2023-01-24
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
