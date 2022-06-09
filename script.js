function computerPlay() {
    const moves = ['scissors', 'paper', 'rock'];
    const choice = Math.floor(Math.random() * 3);

    return moves[choice];
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return 'Draw!'
    } else if (
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock' ) ||
        (playerChoice === 'rock' && computerChoice === 'scissors')

    ) {
        return `${playerChoice} beats ${computerChoice}. You win!`;
    } else {
        return `${computerChoice} beats ${playerChoice}. You lose!`;
    }

}

function game() {
    for (let i = 0; i < 5; i++) {

        let playerChoice = window.prompt('Scissors, Paper or Rock?');
        playerChoice = playerChoice.toLowerCase();

        const possibleMoves = ['scissors', 'paper', 'rock'];

        while (!possibleMoves.includes(playerChoice)) {
            playerChoice = window.prompt('Invalid Choice. Please pick from Scissors, Paper or Rock!');
        }

        const computerChoice = computerPlay();
        console.log(playRound(playerChoice, computerChoice));

    }
}

