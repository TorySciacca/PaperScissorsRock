//A modified version of the Odin Project Rock,Paper,Scissors assignment by Tory Sciacca
//This version seeks to make small improvements as well as a option to set the round number

//Establishes global variables 
let playerScore = 0;
let computerScore = 0;
let bestTo;

//Function to generate the computers logic. At random choses between paper, scissors or rock
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

//Round setup - Core game Loop
function playRound(playerSelection, computerSelection){
    
    if ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore ++
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore ++
        return `You Win! ${playerSelection} beats ${computerSelection}`      
    } else if (playerSelection === computerSelection){
        return `Draw! You both picked ${playerSelection}`
    } else {
        return 'Try again, input not accepted.'
    }
}

//Consolidates functions into a game function
function game(){
    
    //Asks user what score they want to play to
    bestTo = prompt('Best to what?')

    //A while loop that checks that the input is a usable number
    while(true){
        if (isNaN(bestTo)){
            console.log('Try agian, please pick a number.')
            bestTo = prompt('What do you want to play to?')  
        } else {break}
    }

    //Loops till someone wins
    while (true){
        if (playerScore >= bestTo){
            console.log("GAME OVER, YOU WIN!")
            console.log(`FINAL SCORE: You: ${playerScore}, Computer: ${computerScore}`)
            break
        } else if (computerScore >= bestTo) {
            console.log("GAME OVER, YOU LOSE!")
            console.log(`FINAL SCORE: You: ${playerScore}, Computer: ${computerScore}`)
            break
        } else {        
            let playerSelection = prompt("Paper, Scissors or Rock?");
            const computerSelection = computerPlay();

            console.log(playRound(playerSelection.toLowerCase(),computerSelection))
            console.log(`${playerScore}:${computerScore}`)
        }
    }
}
