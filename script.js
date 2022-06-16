function computerPlay() {
    const moves = ['scissors', 'paper', 'rock'];
    const choice = Math.floor(Math.random() * 3);

    return moves[choice];
}

let playerTotal = 0;
let computerTotal = 0;

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return 'Draw!'
    } else if (
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock' ) ||
        (playerChoice === 'rock' && computerChoice === 'scissors')

    ) {
        playerTotal++;
        return `${playerChoice} beats ${computerChoice}. You win!`;
    } else {
        computerTotal++;
        return `${computerChoice} beats ${playerChoice}. You lose!`;
    }

}

// function game() {
//     for (let i = 0; i < 5; i++) {

//         let playerChoice = window.prompt('Scissors, Paper or Rock?');
//         playerChoice = playerChoice.toLowerCase();

//         const possibleMoves = ['scissors', 'paper', 'rock'];

//         while (!possibleMoves.includes(playerChoice)) {
//             playerChoice = window.prompt('Invalid Choice. Please pick from Scissors, Paper or Rock!');
//         }

//         const computerChoice = computerPlay();
//         console.log(playRound(playerChoice, computerChoice));

//     }
// }

const buttons = document.querySelectorAll('button');
const outcome = document.querySelector('#outcome');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const finalOutcome = document.querySelector('#finalOutcome');
buttons.forEach(button => 
    button.addEventListener('click', (e) => {
        const playerChoice = e.target.getAttribute('rps-option');
        outcome.textContent = playRound(playerChoice, computerPlay());
        playerScore.textContent = playerTotal;
        computerScore.textContent = computerTotal;
        if (playerTotal >= 5) {
            finalOutcome.textContent = 'You made it to 5 victories. You Win!';
        } else if (computerTotal >= 5) {
            finalOutcome.textContent = 'Computer made it to 5 victories. You Lose!';
        }
    })
);

