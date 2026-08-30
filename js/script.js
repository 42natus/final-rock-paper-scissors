let computerScore = 0;
let humanScore = 0;

const choices = document.querySelector(".choices");
choices.addEventListener("click", playGame);

// entry point for game
function playGame(event) {
    const target = event.target;

    switch (target.id) {
        case "rock":
        case "paper":
        case "scissors":
            playRound(target.id, getComputerChoice());
            displayScore(humanScore, computerScore);
            checkGameOver(humanScore, computerScore);
            break;
    }
}

function getComputerChoice() {
    const move = Math.floor(Math.random() * 3);
    if (move === 0) {
        return "rock";
    } else if (move === 1) {
        return "paper";
    }
    return "scissors";
}

const gameResults = document.querySelector(".game-results");

function playRound(humanChoice, computerChoice) {
    const result = document.createElement("p");
    if (humanChoice === computerChoice) {
        gameResults.textContent = "It's a tie!"
        return;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") 
    || (humanChoice === "paper" && computerChoice === "rock") 
    || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        gameResults.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        return;
    }
    // computer wins in any other scenario (assuming valid input sha)
    computerScore++;
    gameResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
}

const divOne = document.querySelector(".human-score");
const divTwo = document.querySelector(".computer-score");

function displayScore(humanScore, computerScore) {
    divOne.textContent = `You: ${humanScore}`;
    divTwo.textContent = `Computer: ${computerScore}`;
}

const winner = document.querySelector(".winner");

function checkGameOver(humanScore, computerScore) {
    if (humanScore !== 5 && computerScore !== 5) {
        return;
    }

    let player;
    if (humanScore === 5) {
        alert("Today's your lucky day...");
        winner.textContent = "You won!!!";
        player = "You";
    } else if (computerScore === 5) {
        alert("Better luck next time...");
        winner.textContent = "The computer won.";
        player = "Computer";
    }

    // use custom event to announce winner
    let event = new CustomEvent("winnerfound", {
        detail: {winner: player}
    });

    winner.dispatchEvent(event);
}

// listen for custom winner event
winner.addEventListener("winnerfound", gameOver);

const resetButton = document.createElement("button");
resetButton.textContent = "Play Again";

resetButton.addEventListener("click", resetGame);

function gameOver() {
    winner.append(resetButton);
    resetButton.setAttribute("style", "display: block;");
    
    // stop game play
    const buttons = document.querySelectorAll(".choice");
    buttons.forEach((button) => button.disabled = true);
}

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
