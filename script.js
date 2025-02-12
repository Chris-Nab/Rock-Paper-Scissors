
let humanScore = 0;
let computerScore = 0;
let playGame = 0;

function getHumanChoice(){
    let choice = parseInt(prompt("Enter a number from 0 to 2"));
    if(choice === 0){
        choice = "Rock";
    }
    else if(choice === 1){
        choice = "Paper";
    }
    else{
        choice = "Scissors";
    }
    return choice;
}

function getComputerChoice(){
    rand = Math.floor(Math.random() * 3);
    computerChoice = "";

    if(rand === 0){
        computerChoice = "Rock";
    }
    else if(rand == 1){
        computerChoice = "Paper";
    }
    else{
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice === computerChoice){
        humanScore++;
        computerScore++;
        console.log("It's a tie!")
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("Computer wins, Computer chose paper :)");
        computerScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("Human wins, computer chose rock :(")
        ++humanScore;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("Computer wins, Computer chose rock :)");
        ++computerScore;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Human wins, computer chose scissors :(");
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("Computer wins, Computer chose scissors :)");
        computerScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Human wins, computer chose paper :(");
        ++humanScore;
    }
}




while(playGame < 5){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    ++playGame;

    console.log("Your Score is:" + humanScore);
    console.log("Computer Score is:" + computerScore);

}
