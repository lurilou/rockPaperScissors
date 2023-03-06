//define variables for playerGuess, computerGuess, playerScore, computerScore
let computerGuess = 0;
let playerGuess = 0;
//loop to play game five times
//get computer guess
function getComputerChoice () {
    let random = Math.floor(Math.random()*3);
        if (random === 0) {
            computerGuess = 'Rock';}
        else if (random === 1) {
            computerGuess = 'Paper';}
        else {
            computerGuess = 'Scissors';}
}

getComputerChoice();
//get player guess
// compare the guesses and determine winner
//update scores