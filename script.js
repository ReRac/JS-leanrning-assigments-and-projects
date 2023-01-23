"use strict";

//const invitation = prompt("Choose Rock, Paper or Scissors 😃!");

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    return "Rock";
  } else if (randomChoice === 1) {
    return "Scissors";
  } else randomChoice === 2;
  return "Paper";
};
console.log(getComputerChoice());
