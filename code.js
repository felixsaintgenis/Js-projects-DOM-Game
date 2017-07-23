let totalScorePlayerOne = 0;
let totalScorePlayerTwo = 0;
let roundScorePlayerOne = 0;
let roundScorePlayerTwo = 0;
let switchPlayer = true;

const totalScorePlayerOneHTML = document.getElementById('main-score-player-one');
const totalScorePlayerTwoHTML= document.getElementById('main-score-player-two');
const roundScorePlayerOneHTML = document.getElementById('round-score-player-one');
const roundScorePlayerTwoHTML = document.getElementById('round-score-player-two');

const playerOneTurn = document.getElementById('playerOneTurn')
const playerTwoTurn = document.getElementById('playerTwoTurn')

const holdButton = document.getElementById('holdButton')

const diceImg = document.getElementById('diceImage')

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

  diceRoll = Math.round(Math.random()*5 + 1);
  changeImage ()
  ChosenPlayer ()
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
    gameWin ()
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

 function changeImage () {
      if (diceRoll == 1) {
         diceImg.src="images/dice-1.png";
      }
      else if (diceRoll == 2) {
         diceImg.src="images/dice-2.png";
      }
      else if (diceRoll == 3) {
         diceImg.src="images/dice-3.png";
      }
      else if (diceRoll == 4) {
         diceImg.src="images/dice-4.png";
      }
      else if (diceRoll == 5) {
         diceImg.src="images/dice-5.png";
      }
      else if (diceRoll == 6) {
         diceImg.src="images/dice-6.png";
      }
 }
function ChosenPlayer () {
  if (switchPlayer == true) {
    playerOneTurn.style.color = 'red';
    playerTwoTurn.style.color = 'black';
  }
  else if (switchPlayer == false) {
    playerTwoTurn.style.color = "red";
    playerOneTurn.style.color = "black";
  }
}
