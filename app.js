const playerPointsSpan = document.querySelector(".player-points");
const compPointsSpan = document.querySelector(".comp-points");
const optionsButtons = document.querySelectorAll(".options button");
const playerChoiceSpan = document.querySelector(".player.choice");
const compChoiceSpan = document.querySelector(".comp-choice");
const resultText = document.querySelector(".results-text");
const resetGameButton = document.querySelector(".reset-game");


let playerPoints = 0;
let playerChoice = "";
let compPoints = 0;
let compChoice = "";

function setGame () {
    playerPointsSpan.innerHTML = playerPoints;
    compPointsSpan.innerHTML = compPoints;
    resultText.innerHTML = "Chose your weapon"
}

window.onload = setGame();