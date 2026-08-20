let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const move = Math.floor(Math.random() * 3);
    if (move === 0) {
        return 'rock';
    } else if (move === 1) {
        return 'paper';
    }
    return 'scissors';
}

function getHumanChoice() {
    const move = prompt('Please enter your move (rock/paper/scissors):', 'rock');
    return (move === null || move === '') ? 'rock' : move.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') 
    || (humanChoice === 'paper' && computerChoice === 'rock') 
    || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else { // computer wins in any other scenario (assuming valid input sha)
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Human: ${humanScore}\nComputer: ${computerScore}`)
    
    const result = (humanScore === computerScore) ? 'The game ended in a tie.' :
        (humanScore > computerScore) ? 'Winner: You' : 
        'Winner: Computer';

    console.log(result);
    alert(result);
}

playGame();
