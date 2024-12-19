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

    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue ||
        !moveThreeType || !moveThreeValue) {
        return;
    }
    
    if (!isValidMoveType(moveOneType) ||
        !isValidMoveType(moveTwoType) ||
        !isValidMoveType(moveThreeType)) {
        return;
    }
    
    if (!isValidMoveValue(moveOneValue) ||
        !isValidMoveValue(moveTwoValue) ||
        !isValidMoveValue(moveThreeValue)) {
        return;
    }
    
    if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    }

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

function isValidMoveType(moveType) {
    return (moveType === 'rock') ||
            (moveType === 'paper') ||
            (moveType === 'scissors');
}
  
function isValidMoveValue(moveValue) {
    return (moveValue >= 1) && (moveValue <= 99);
}

function getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, 
                        playerTwoMoveOneType, playerTwoMoveOneValue) {
    if (!playerOneMoveOneType || !playerOneMoveOneValue || !playerTwoMoveOneType ||
        !playerTwoMoveOneValue) {
        return null;
    }

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

function addWin(winner) {
    if (winner === 'Player One') {
      playerOneScore = (playerOneScore + 1) || 1;
    } else if (winner === 'Player Two') {
      playerTwoScore = (playerTwoScore + 1) || 1;
    }
}