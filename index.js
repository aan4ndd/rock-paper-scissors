
let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let result = document.querySelector('.result');
let currentScore = document.querySelector('.score');

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
     computerChoice = choices[randomIndex];
     return computerChoice;
}


  rock.addEventListener('click', () =>{
        const humanSelection = "rock";result
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        checkWinner(humanScore, computerScore);

    })
    paper.addEventListener('click', () =>{
        const humanSelection = "paper";
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        checkWinner(humanScore, computerScore);

    })
    scissors.addEventListener('click', () =>{
        const humanSelection = "scissors";
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        checkWinner(humanScore, computerScore);

    })


     let displayHumanScore = document.createElement("h2");
     let displayComputerScore = document.createElement("h2");

     displayHumanScore.textContent = `You: ${humanScore}`;
     displayComputerScore.textContent = `Computer: ${computerScore}`;
     
      currentScore.appendChild(displayHumanScore);
      currentScore.appendChild(displayComputerScore);

     function playRound(humanSelection, computerSelection){
        let p = document.createElement("p");


        if(humanSelection == computerSelection){
  
        p.textContent = "Its a Draw" ;
         }
        else if(
            (humanSelection == "rock" && computerSelection == "scissors")||
            (humanSelection == "paper" && computerSelection == "rock")||
            (humanSelection == "scissors" && computerSelection   == "paper")
        ){
            humanScore++;
            p.textContent = "Win";
            


        }
        else{
            computerScore++;
            p.textContent = "Lose";
            
            
        } 
        
        result.appendChild(p); 
       
     displayHumanScore.textContent = `You: ${humanScore}`;
     displayComputerScore.textContent = `Computer: ${computerScore}`;    
    }

    const checkWinner = (humanScore, computerScore) => {
        let finalResult = document.createElement("h1");
        if(humanScore === 5 ){
            finalResult.textContent = "YOU ARE THE WINNER";
            result.appendChild(finalResult);
            endGame();
        }
        if(computerScore === 5 ){
            finalResult.textContent = "YOU LOST";
            result.appendChild(finalResult);
            endGame();
        }
    }

     
    function endGame(){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

    }

