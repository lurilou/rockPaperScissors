//define variables for playerSelection, computerSelection, playerScore, computerScore
let computerSelection = getComputerChoice();
let playerSelection;


//loop to play game five times

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
//get player guess
    let input = prompt('Rock, paper, Scissors?');
    playerSelection = input.toLowerCase();
    getComputerChoice();
// compare the guesses and determine winner
    if (playerSelection === computerSelection) {
        console.log('It\'s a tie')
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose! Paper covers rock.';
        }
        else {
            return 'You win! Rock crushes scissors.';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper covers rock.';
        }
        else {
            return 'You lose! Scissors cut paper.';
        }
    }
    else {
        return 'Invalid input!';
    }
}


console.log(playRound(playerSelection, computerSelection));

//update scores