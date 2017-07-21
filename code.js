let totalScorePlayerOne = 0;
let totalScorePlayerTwo = 0;
let roundScorePlayerOne = 0;
let roundScorePlayerTwo = 0;

const totalScorePlayerOneHTML = document.getElementById('main-score-player-one');
const totalScorePlayerTwoHTML= document.getElementById('main-score-player-two');
const roundScorePlayerOneHTML = document.getElementById('round-score-player-one');
const roundScorePlayerTwoHTML = document.getElementById('round-score-player-two');

const holdButton = document.getElementById('holdButton')

let diceRoll = 0;

function newGame () {
  totalScorePlayerOneHTML.innerHTML = "0";
  totalScorePlayerTwoHTML.innerHTML = "0";
  roundScorePlayerOneHTML.innerHTML = "0";
  roundScorePlayerTwoHTML.innerHTML = "0";
}

function rollingDice () {
  diceRoll = Math.round(Math.random()*6);
  if (diceRoll !== 1) {
    roundScorePlayerOne += diceRoll;
    roundScorePlayerOneHTML.innerHTML = roundScorePlayerOne

  } else {
    roundScorePlayerOne = 0
    roundScorePlayerOneHTML.innerHTML = 0
  }
}

function hold () {
   totalScorePlayerOne += roundScorePlayerOne
   totalScorePlayerOneHTML.innerHTML = totalScorePlayerOne
   roundScorePlayerOne = 0
   roundScorePlayerOneHTML.innerHTML = 0

}
