
let computerChoice;
let humanChoice;
let humanScore;
let computerScore;


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
     computerChoice = choices[randomIndex];
}

function getHumanChoice(){
     humanChoice = prompt("Enter your choice :");
}



function playGame(){
    humanScore = 0;
    computerScore = 0;
    for(round = 1; round <= 5; round++){
        function playRound(humanSelection, computerSelection){
        if(humanChoice == computerChoice){
  
         return console.log("Draw")
        }
        else if(
            (humanChoice == "rock" && computerChoice == "scissors")||
            (humanChoice == "paper" && computerChoice == "rock")||
            (humanChoice == "scissors" && computerChoice == "paper")
        ){
            humanScore++;
            return console.log("Win");
            


        }
        else{
            computerScore++;
            return console.log("Lose");
            

        } 

     }
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);
 }
}

playGame();
if(humanScore > computerScore){
    console.log(`You Won ${humanScore} out of 5 Rounds!`);
}
else{
    console.log(`You lost`);
}
