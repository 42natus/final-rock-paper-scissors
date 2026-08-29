let computerScore = 0;
let humanScore = 0;

const gameResults = document.querySelector(".game-results");
const runningScore = document.querySelector(".running-score");

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
            break;
    }
});

function displayRunningScore(humanScore, computerScore) {
    const divOne = document.querySelector(".human-score");
    const divTwo = document.querySelector(".computer-score");
    divOne.textContent = `You: ${humanScore}`;
    divTwo.textContent = `Computer: ${computerScore}`;
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
