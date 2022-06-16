"use strict";

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    console.log(userChoice);
    getResult();
  })
);

const generateComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  console.log(randomNumber);

  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "scissors";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else console.log("something went wrong");
  computerChoiceDisplay.innerHTML = computerChoice;
};

function getResult() {
  if (computerChoice === userChoice) {
    resultDisplay.innerHTML = "TIE!";
  } else if (computerChoice === "rock" && userChoice === "scissors")
    resultDisplay.innerHTML = "Computer won!";
  else if (computerChoice === "scissors" && userChoice === "paper")
    resultDisplay.innerHTML = "Computer won!";
  else if (computerChoice === "paper" && userChoice === "rock")
    resultDisplay.innerHTML = "Computer won!";
  else resultDisplay.innerHTML = "User won!";
}
