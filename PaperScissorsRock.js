let playerScore = 0
let computerScore = 0

function computerPlay(){
    
    let numGen = Math.floor((Math.random() * 3))

    if (numGen === 0){
        return "paper"
    } else if (numGen === 1){
        return "scissors"
    } else {
        return "rock"
    }

};

function playRound(playerSelection, computerSelection){
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore ++
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore ++
        return `You Win! ${playerSelection} beats ${computerSelection}` 
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore ++
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore ++
        return `You Win! ${playerSelection} beats ${computerSelection}`  
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore ++
        return `You Lose! ${computerSelection} beats ${playerSelection}` 
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore ++
        return `You Win! ${playerSelection} beats ${computerSelection}`     
    } else if (playerSelection === computerSelection){
        return `Draw! You both picked ${playerSelection}`
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Paper, Scissors or Rock?");
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection.toLowerCase(),computerSelection))
    }
    if (playerScore === computerScore){ 
        console.log("GAME OVER, DRAW")
    } else if (playerScore > computerScore) {
        console.log("GAME OVER, YOU WIN!")
    } else if (playerScore < computerScore) {
        console.log("GAME OVER, YOU LOSE!")
    }
}

game();
