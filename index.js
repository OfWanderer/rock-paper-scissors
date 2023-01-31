console.log("Hello World.");
console.log("This is Cap'n Kirk of the Enterprise.");
console.log("Let's go over the \"Plan\" before we start the Project: Rock Paper Scissors");
console.log("For future of the planet Earth may depend on it.");

let plan = `
• Does your program have a user interface ?

    - We do not need a UI (User Interface) for current version of the game.
    
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
// Idea is to assign a random number that is in between 0-10 to each "Rock", "Paper" and "Scissors".
// Same is done with the "random" variable inside the "getComputerChoice" function.
// If one of the randomly generated numbers match the value of the computer it should return as a string name that matches one of the three.
// "Rock", "Paper" and "Scissors" must not have the same values.

const rock = 1;

const paper = 2;

const scissors = 3;

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1;

    if (random === rock) {
        console.log("Rock");
    } else if (random === paper) {
        console.log("Paper");
    } else if (random === scissors) {
        console.log("Scissors");
    } else {
        console.log("Something is wrong, " + random + " does not match the rest.");
    }
}
