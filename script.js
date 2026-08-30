let computerScore = 0;
let humanScore = 0;

const gameResults = document.querySelector(".game-results");
const runningScore = document.querySelector(".running-score");
const divOne = document.querySelector(".human-score");
const divTwo = document.querySelector(".computer-score");
const winner = document.querySelector(".winner");

function getComputerChoice() {
    const move = Math.floor(Math.random() * 3);
    if (move === 0) {
        return 'rock';
    } else if (move === 1) {
        return 'paper';
    }
    return 'scissors';
}

// function getHumanChoice() {
//     const move = prompt('Please enter your move (rock/paper/scissors):', 'rock');
//     return (move === null || move === '') ? 'rock' : move.toLowerCase();
// }

function playRound(humanChoice, computerChoice) {
    const result = document.createElement("p");
    if (humanChoice === computerChoice) {
        gameResults.textContent = "It's a tie!"
        return;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') 
    || (humanChoice === 'paper' && computerChoice === 'rock') 
    || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        gameResults.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        return;
    }
    // computer wins in any other scenario (assuming valid input sha)
    computerScore++;
    gameResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
}

const choices = document.querySelector(".choices");
choices.addEventListener("click", (event) => {
    const target = event.target;

    switch (target.id) {
        case 'rock':
        case 'paper':
        case 'scissors':
            playRound(target.id, getComputerChoice());
            displayRunningScore(humanScore, computerScore);
            checkWinner(humanScore, computerScore);
            break;
    }
});

function displayRunningScore(humanScore, computerScore) {
    divOne.textContent = `You: ${humanScore}`;
    divTwo.textContent = `Computer: ${computerScore}`;
}

function checkWinner(humanScore, computerScore) {
    if (humanScore !== 5 && computerScore !== 5) {
        return;
    }

    let player;
    if (humanScore === 5) {
        alert("You won!!!");
        winner.textContent = "You won!!!";
        player = "You";
    } else if (computerScore === 5) {
        alert("The computer won. Better luck next time...");
        winner.textContent = "The computer won. Better luck next time...";
        player = "Computer";
    }

    // use custom event to announce winner
    let event = new CustomEvent("winnerfound", {
        detail: {winner: player}
    });

    winner.dispatchEvent(event);
}

// listen for whether there's a winner
winner.addEventListener("winnerfound", gameOver);

function gameOver() {
    winner.append(resetButton);
    resetButton.setAttribute("style", "display: block;");
    
    const buttons = document.querySelectorAll(".choice");
    buttons.forEach((button) => button.disabled = true);
}

const resetButton = document.createElement("button");
resetButton.textContent = "Play Again";
resetButton.addEventListener("click", resetGame);

function resetGame() {
    gameResults.textContent = "";
    divOne.textContent = "";
    divTwo.textContent = "";
    winner.textContent = "";
    humanScore = 0;
    computerScore = 0;
    resetButton.setAttribute("style", "display: none;");

    const buttons = document.querySelectorAll(".choice");
    buttons.forEach((button) => button.disabled = false);
}

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }

//     console.log(`Human: ${humanScore}\nComputer: ${computerScore}`)
    
//     const result = (humanScore === computerScore) ? 'The game ended in a tie.' :
//         (humanScore > computerScore) ? 'Winner: You' : 
//         'Winner: Computer';

//     console.log(result);
//     alert(result);
// }
