const computerPlay = () => {
    let randomComputerChoice = Math.floor(Math.random() * 3 + 1);

    switch (randomComputerChoice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "scissor";
            break;
        case 3:
            return "paper";
            break;
        default:
            console.error("Random fn failed");
            return null;
            break;
    }
}

const singleRound = (playerSelection, computerSelection) => {
    //console.log(playerSelection.toString().toLowerCase());
    const player = String(playerSelection).toLowerCase();
    const computer = String(computerSelection).toLowerCase();

    if (player == computer)
        return `Both tied at ${player}`;

    if (player == "rock" && computer == "paper" ||
        player == "paper" && computer == "scissor" ||
        player == "scissor" && computer == "rock")
        return winnerString("Computer", "Player", computer, player);


    if (computer == "rock" && player == "paper" ||
        computer == "paper" && player == "scissor" ||
        computer == "scissor" && player == "rock")
        return winnerString("Player", "Computer", player, computer);

}

const winnerString = (winner, loser, winnerHand, loserHand) => {

    return `${winner.toUpperCase()} wins , as ${winnerHand.toUpperCase()} beats ${loserHand.toUpperCase()}`;

}

const game = () => {
    var roundCounter = 0;
    const noOfRounds = 5;
    while (roundCounter < noOfRounds) {
        console.log(singleRound(prompt(), computerPlay()));
        roundCounter++;
    }

}