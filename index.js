console.log("Hello World.");
console.log("This is Cap'n Kirk of the Enterprise.");
console.log("Let's go over the \"Plan\" before we start the Project: Rock Paper Scissors");
console.log("For future of the planet Earth may depend on it.");

let plan = `
• Does your program have a user interface ?

    - We do not necessarily need a UI (User Interface) for current version of the game.
    
• What inputs will your program have ?

    - There will be options to be chosen among which is either "Rock", "Paper" or "Scissors".

    - These options will be "randomly" chosen by the computer and "specifically" by the person who is playing the game.

    - "Rock" beats "Scissors", "Scissors cuts the paper." and lastly "Paper wraps the rock.".

• What is the desired output ?

    - The desired output is to announce the winner of the game wether it is the computer or the person who is playing.

• Given your inputs, what are the necessary steps to return the desired output ?
    
    - My game needs to play against the computer, for that we need a function that will randomly return "Rock", "Paper" or "Scissors".

    - We also need a function that plays the game for a single round with two parameters, "playerSelection" and "computerSelection" and then returns  a const that declares the winner.
        
        ↳ "playerSelection" parameter needs to be case insensitive.
    
    - And lastly we need another function that const's us play a 5 round game that keeps score and again declares the winner or the loser at the end.    `

console.log(plan);


// Problem I - "getComputerChoice" Function that should randomly return "Rock", "Paper" or "Scissors".
// Idea is to assign numbers to each "Rock", "Paper" and "Scissors" and then make computer choose randomly among those values.
// If one of the randomly generated numbers match the value of the computer it should return as a string name that matches one of the three.
// "Rock", "Paper" and "Scissors" must not have the same values.

const rock = 1;

const paper = 2;

const scissors = 3;

function getComputerChoice() {

    const random = Math.floor(Math.random() * 3) + 1;

    if (random === rock) {

        return "Rock"

    } else if (random === paper) {

        return "Paper"

    } else if (random === scissors) {

        return "Scissors"

    } else {

        return "Something is wrong.";

    }
}


// Problem II - We need a function that plays a single round of the game.
// Function should have two parameters "playerSelection" and "computerSelection".
// It should return a string that declares the winner of the round like this: "You lose. Paper beats rock."
// "playerSelection" Parameter should be case insensitive.

let playerWin = "Player has won the game.";
let computerWin = "Computer has won the game.";
let draw = "It is a draw.";
let cancel = "The game has been cancelled.";
let warning = "You need to pick one of the mentioned options in order to play the game.";



function playRound(playerSelection, computerSelection, result) {

    playerSelection = prompt("Which one do you chose; Rock, Paper or Scissors ?", "");
    computerSelection = getComputerChoice();

    if (playerSelection === null) {

        return cancel;

    } else if (playerSelection === "") {

        console.warn("Player has chosen nothing.");
        console.log("Computer has chosen " + computerSelection + ".");
        console.warn(warning);
        return playRound();

    } else {

        let a = playerSelection.substring(0, 1).toUpperCase();
        let b = playerSelection.substring(!0).toLowerCase();

        playerSelection = a + b;

        console.log("Player has chosen " + playerSelection + ".");
        console.log("Computer has chosen " + computerSelection + ".");

    }

    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === "rock" && computerSelection === "Paper") {

        return computerWin;

    } else if (playerSelection === "paper" && computerSelection === "Scissors") {

        return computerWin;

    } else if (playerSelection === "scissors" && computerSelection === "Rock") {

        return computerWin;

    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        
        return playerWin;

    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        
        return playerWin;

    } else if (playerSelection === "scissors" && computerSelection === "Paper") {

        return playerWin;

    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {

        console.log(draw);

        if (confirm("It's a draw. Would you like to try again ?") == true) {

            return playRound();

        } else {

            return "Player has settled for draw, the game has ended.";

        }

    } else {

        console.warn(warning);
        return playRound();

    }
}

// Problem III - We need a new function called game() to play the game for 5 rounds.
// It should keep the score and declare the winner or loser.

let playerScore = 0;
let computerScore = 0;

function game(round) {

    alert("This is a five round game of Rock, Paper & Scissors.\nBest out of five wins the game.\nGood luck.");

    for (let i = 0; i < 5; ++i){

        round = playRound();
        playerScore;
        computerScore;

        if (round === cancel) {

            if (confirm('You are about to end the five round game, press "OK" if you want to end or press "Cancel" if you want to continue the game.') == false) {
                
                playerScore;
                computerScore;
                return game();

            } else {

                playerScore = 0;
                computerScore = 0;
                return cancel;

            }

        } else if (round === computerWin) {

            computerScore++;

        } else if (round === playerWin) {

            playerScore++;

        } else if (round === draw) {

            console.log(draw);

        } else if (round === warning) {

            console.log(warning);

        } else {

            console.log("Something is wrong.");

        }

        console.log(`Player: ${playerScore} Computer: ${computerScore}`);

        if (playerScore >= 3 && playerScore > computerScore) {
        
            playerScore = 0;
            computerScore = 0;
            return "Player has won.";
    
        } else if (computerScore >= 3 && playerScore < computerScore) {
    
            playerScore = 0;
            computerScore = 0;
            return "Computer has won.";
    
        }
    }

    if (playerScore === computerScore) {

        if (confirm("It's a draw. Would you like to continue until there is a winner ?") == true) {

                return playRound();

        } else {

            playerScore = 0;
            computerScore = 0;
            return "Player has settled for draw, the game has ended.";

        }

    } else {

        console.log("There is something wrong.");

    }

    console.log(`Player: ${playerScore} Computer: ${computerScore}`);

    playerScore = 0;
    computerScore = 0;
}