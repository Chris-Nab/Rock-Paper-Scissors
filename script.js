
let humanScore = 0;
let computerScore = 0;
let playGame = 0;

function getHumanChoice(){
    const btn_rock = document.querySelector("Rock");
    const btn_paper = document.querySelector("Paper");
    const btn_scissors = document.querySelector("Scissors");

    let choice = "";

    btn_rock.onclick = () => choice = "Rock";
    btn_paper.onclick = () => choice = "Paper";
    btn_scissors.onclick = () => choice = "Scissors";

    // let choice = parseInt(prompt("Enter a number from 0 to 2"));
    // if(choice === 0){
    //     choice = "Rock";
    // }
    // else if(choice === 1){
    //     choice = "Paper";
    // }
    // else{
    //     choice = "Scissors";
    // }
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




// while(playGame < 5){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    start_btn = document.querySelector("#btn");

    start_btn.onclick() = () => playRound(humanChoice, computerChoice);
    ++playGame;

    let dispalyHumanScore = document.createElement("div");
    dispalyHumanScore.textContent = 'Human Score is ${humanScore}';

    let displayComputerScore = document.createElement("div");
    displayComputerScore.textContent = 'Computer Score is ${computerScore}';

    
    document.body.appendChild(dispalyHumanScore);
    document.body.appendChild(displayComputerScore);

    console.log("Your Score is:" + humanScore);
    console.log("Computer Score is:" + computerScore);

// }
