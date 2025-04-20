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

function getHumanChoice(){
    let input = prompt("Please enter your choice for rock, paper, scissors: ");
    return input
}

let humanScore = 0;
let computerScore = 0;

function playRound(gethumanChoice, getcomputerChoice){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
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