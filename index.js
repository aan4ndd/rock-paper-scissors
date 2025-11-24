// create a variable for human choice
// create a function for computer choice
// write logic for 1 game 
// add score 
// write logic for best of 3
let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
     computerChoice = choices[randomIndex];
}

function getHumanChoice(){
     humanChoice = prompt("Enter your choice :");
}

function playRound(humanSelection, computerSelection){
    if(humanChoice == computerChoice){
     return console.log("It's a Draw")
    }
    else if(
        (humanChoice == "rock" && computerChoice == "scissors")||
        (humanChoice == "paper" && computerChoice == "rock")||
        (humanChoice == "scissors" && computerChoice == "paper")
    ){
        return console.log("You Win");
        humanScore++;


    }
    else{
        return console.log("You lose");
        computerScore++;

    }
      
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
