////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////



function getPlayerMove(move) {
    var move = getInput();
    if (move === null) {
        return getInput();
    }
}

function getComputerMove(move) {
    var move = randomPlay();
    if (move === null) {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    if (playerMove === computerMove) {
        return 'tie';
    }

    if (playerMove === 'rock') {
        if (computerMove === 'scissors') {
            return 'player';
        } else {
            return 'computer';
        }
    }

    if (playerMove === 'paper') {
        if (computerMove === 'scissors') {
            return 'player';
        } else {
            return 'computer';
        }
    }

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (var i = 0; i <= 6; i += 1 ) {
        if (getWinner === 'player') {
            playerWins += 1;
            console.log('Player chose' + playerMove + 'while Computer chose' + computerMove);
        } else if (getWinner === 'computer') {
            computerWins += 1;
            console.log('Computer chose' + computerMove + 'while Player chose' + playerMove);
        } else {
            console.log('tie')
        }
    }
    return [playerWins, computerWins];
}