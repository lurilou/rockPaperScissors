//define variables for playerSelection, computerSelection, playerScore, computerScore

let playerScore = 0;
let computerScore = 0;

//loop to play game five times
function game() {
    for (i=0; i<5; i++) {
        //get player guess
    let input = prompt('Rock, paper, Scissors?');
    let playerSelection = input.toLowerCase();
    let computerSelection=getComputerChoice();
    console.log('You chose ' + playerSelection + ' and the computer chose ' + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore === computerScore) {
       console.log(`It's a tie! Final scores: ${playerScore} (player) to ${computerScore} (computer).`) 
    }
    else if (playerScore < computerScore) {
        console.log(`You lost, big time! Final scores: ${playerScore} (player) to ${computerScore} (computer).`)
    }
    else {
        console.log(`You're a winner, baby! Final scores: ${playerScore} (player) to ${computerScore} (computer).`)
    }
}
//get computer guess
function getComputerChoice () {
    let random = Math.floor(Math.random()*3);
        if (random === 0) {
            return 'rock';}
        else if (random === 1) {
            return 'paper';}
        else {
            return 'scissors';}
}


function playRound (playerSelection, computerSelection){
// compare the guesses and determine winner
    if (playerSelection === computerSelection) {
        return `It's a tie. Current score : ${playerScore} (player) to ${computerScore} (computer).`;
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            return `You lose! Paper covers rock. Current score : ${playerScore} (player) to ${computerScore} (computer).`;
        }
        else {
            playerScore++;
            return `You win! Rock crushes scissors. Current score : ${playerScore} (player) to ${computerScore} (computer).`;
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return `You win! Paper covers rock. Current score : ${playerScore} (player) to ${computerScore} (computer).`;
        }
        else {
            computerScore++;
            return `You lose! Scissors cut paper. Current score : ${playerScore} (player) to ${computerScore} (computer).`;
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return `You lose! Rock crushes scissors. Current score : ${playerScore} (player) to ${computerScore} (computer).`;
        }
        else {
            playerScore++;
            return `You win! Scissors cut paper. Current score : ${playerScore} (player) to ${computerScore} (computer).`;
        }
    }
    else {
        return 'Invalid input!';
    }
}

game()

//update scores