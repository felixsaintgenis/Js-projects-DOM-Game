let totalScorePlayerOne = 0;
let totalScorePlayerTwo = 0;
let roundScorePlayerOne = 0;
let roundScorePlayerTwo = 0;
let switchPlayer = true;

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
  totalScorePlayerOne = 0;
  totalScorePlayerTwo = 0;
  roundScorePlayerOne = 0;
  roundScorePlayerTwo = 0;
  switchPlayer = true;
}



function rollingDice () {

  diceRoll = Math.round(Math.random()*6 + 1);

  if (switchPlayer == true) {

    if (diceRoll !== 1) {
      roundScorePlayerOne += diceRoll;
      roundScorePlayerOneHTML.innerHTML = roundScorePlayerOne
      gameWin ()

    } else {
      roundScorePlayerOne = 0
      roundScorePlayerOneHTML.innerHTML = 0
      switchPlayer = false;
    }
  } else {
    if (diceRoll !== 1) {
      roundScorePlayerTwo += diceRoll;
      roundScorePlayerTwoHTML.innerHTML = roundScorePlayerTwo
      gameWin ()

    } else {
      roundScorePlayerTwo = 0
      roundScorePlayerTwoHTML.innerHTML = 0
      switchPlayer = true;
    }
  }

  }


function hold () {
  if (switchPlayer == true) {
    totalScorePlayerOne += roundScorePlayerOne
    totalScorePlayerOneHTML.innerHTML = totalScorePlayerOne
    roundScorePlayerOne = 0
    roundScorePlayerOneHTML.innerHTML = 0
    switchPlayer = false;
  } else {
    totalScorePlayerTwo += roundScorePlayerTwo
    totalScorePlayerTwoHTML.innerHTML = totalScorePlayerTwo
    roundScorePlayerTwo = 0
    roundScorePlayerTwoHTML.innerHTML = 0
    switchPlayer = true;
    gameWin ()
  }

}

function gameWin () {
  if (totalScorePlayerOne >= 100) {
    alert("Player one win the game")
  }
  if (totalScorePlayerTwo >=100) {
    alert("Player two win the game")
  }
}
