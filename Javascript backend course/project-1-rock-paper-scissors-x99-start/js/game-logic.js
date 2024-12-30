// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;

let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

let playerOneScore;
let playerTwoScore;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, 
                        moveTwoValue, moveThreeType, moveThreeValue) {
    
    // deals with no input
    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue ||
        !moveThreeType || !moveThreeValue) {
        return;
    }
    
    // deals with invalid type
    if (!isValidMoveType(moveOneType) ||
        !isValidMoveType(moveTwoType) ||
        !isValidMoveType(moveThreeType)) {
        return;
    }
    
    // deals with invalid value
    if (!isValidMoveValue(moveOneValue) ||
        !isValidMoveValue(moveTwoValue) ||
        !isValidMoveValue(moveThreeValue)) {
        return;
    }
    
    if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    }

    // assigns arguments to variables
    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two'){
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}

// Only accepts rock, paper and scissors as moves
function isValidMoveType(moveType) {
    return (moveType === 'rock') ||
            (moveType === 'paper') ||
            (moveType === 'scissors');
}

// Only accepts values between 1 and 99
function isValidMoveValue(moveValue) {
    return (moveValue >= 1) && (moveValue <= 99);
}

function getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, 
                        playerTwoMoveOneType, playerTwoMoveOneValue) {
     
    // deals with no input
    if (!playerOneMoveOneType || !playerOneMoveOneValue || !playerTwoMoveOneType ||
        !playerTwoMoveOneValue) {
        return null;
    }

    // gets winner based on type of move and/or value
    if (playerOneMoveOneType === playerTwoMoveOneType) {
        if (playerOneMoveOneValue < playerTwoMoveOneValue) {
            return 'Player Two';
        } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
            return 'Player One';
        } else {
            return 'Tie';
        }
    } 
    if (playerOneMoveOneType === 'rock') {
        if (playerTwoMoveOneType === 'scissors') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } else if (playerOneMoveOneType === 'paper') {
        if (playerTwoMoveOneType === 'rock') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
      } else {
        if (playerTwoMoveOneType === 'paper') {
          return 'Player One';
        } else {
          return 'Player Two';
        }
    }
    
}

// returns the winner of the round
function getRoundWinner(roundNumber) {
    switch(roundNumber) {
        case 1: 
            return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, 
                                playerTwoMoveOneType, playerTwoMoveOneValue);
        case 2:
            return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, 
                                playerTwoMoveTwoType, playerTwoMoveTwoValue);
        case 3:
            return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, 
                                playerTwoMoveThreeType, playerTwoMoveThreeValue);
        default:
            return null
    }
}

// displays the winner of the game
function getGameWinner() {

    const roundOne = getRoundWinner(1);
    const roundTwo = getRoundWinner(2);
    const roundThree = getRoundWinner(3);

    playerOneScore = 0;
    playerTwoScore = 0;

    addWin(roundOne);
    addWin(roundTwo);
    addWin(roundThree);

    if (playerOneScore > playerTwoScore) {
        return 'Player One';
    } else if (playerOneScore < playerTwoScore) {
        return 'Player Two';
    } else {
        return 'Tie';
    }
}

// adds the number of wins per round on to a variable
function addWin(winner) {
    if (winner === 'Player One') {
      playerOneScore = (playerOneScore + 1) || 1;
    } else if (winner === 'Player Two') {
      playerTwoScore = (playerTwoScore + 1) || 1;
    }
}