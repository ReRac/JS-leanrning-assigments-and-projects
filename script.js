"use strict";
// const invitation = prompt("Choose rock, paper or scissors 😃!");

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
    W;
  } else {
    return `Input is not valid, you don not fool me mister;`;
  }
};
