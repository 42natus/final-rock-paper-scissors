let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const move = Math.floor(Math.random() * 3);
    if (move === 0) {
        return 'Rock';
    } else if (move === 1) {
        return 'Paper';
    }
    return 'Scissors';
}

function getHumanChoice() {
    const move = prompt('Please enter your move (Rock/Paper/Scissors):', 'Rock');
    return (move === null || move === '') ? 'rock' : move.toLowerCase();
}


console.log(getHumanChoice());