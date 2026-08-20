function getComputerChoice() {
    const move = Math.floor(Math.random() * 3);
    if (move === 0) {
        return 'Rock';
    } else if (move === 1) {
        return 'Paper';
    }
    return 'Scissors';
}

console.log(getComputerChoice());