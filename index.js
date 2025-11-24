// create a variable for human choice
// create a function for computer choice
// write logic for 1 game 
// add score 
// write logic for best of 3


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

console.log(getComputerChoice());