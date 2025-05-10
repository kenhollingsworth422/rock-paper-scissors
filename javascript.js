function getComputerChoice(){
    const choice = Math.random();
    if (choice <= 0.33){
        return "rock"
    }
    else if (choice > 0.34 && choice <= 0.66){
        return "paper"
    }
    else {
        return "scissors"
    }   
}

function getHumanChoice(e){
    const input = e.target.className;
    return input
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanPick, computerPick){
    let humanChoice = humanPick;
    let computerChoice = computerPick;
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats paper")
        return humanScore +=1
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Paper beats scissors.")
        return computerScore +=1
    } 
    else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats rock.")
        return computerScore +=1
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats rock.")
        return humanScore +=1
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats paper.")
        return humanScore +=1
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats scissors.")
        return computerScore +=1
    }        
    else {
        console.log("Tie game! There is no winner.")
    }
} 

function playGame(PlayRound){
    let game = 4;
    while (game>=0) {
        playRound()
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Human Score: ${humanScore}`);
        console.log(game)
        game = game - 1;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
        const human = getHumanChoice(event);
        const computer = getComputerChoice();
        playRound(human,computer);
        updateScore();
        if (humanScore == 5){
            alert("Good job! You won!");
        }
        if (computerScore == 5) {
            alert("You lost! The computer won...")
        }
    });
});

function updateScore() {
    const displayHumanScore = document.querySelector(".human-score");
    const displayComputerScore = document.querySelector(".computer-score");
    displayHumanScore.textContent = `Player Score: ${humanScore}`;
    displayComputerScore.textContent = `Computer Score: ${computerScore}`;
}