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
        return winnerString("player", "computer", player, computer);

}

const winnerString = (winner, loser, winnerHand, loserHand) => {
    const result = `${winner.toUpperCase()} wins , as ${winnerHand.toUpperCase()} beats ${loserHand.toUpperCase()}`;

    const resultTag =document.getElementById("result");
    resultTag.textContent=result;
    updateScore(winner);
}

const updateScore = (winner)=>{
    if(winner=="player"){
        playerScore++;
    }else{
        computerScore++;
    }
    playerScoreDiv.textContent=playerScore;
    console.log("player "+playerScore);
    console.log("computer "+computerScore);

    computerScoreDiv.textContent=computerScore;

    if(playerScore>5||computerScore>5){
        playerScore=0;
        computerScore=0;
        const resultTag =document.getElementById("result");
        resultTag.textContent=`${winner} wins the full match`;
    }
}

let playerScore=0;
let computerScore=0;
const playerScoreDiv=document.getElementById("player-score");
const computerScoreDiv=document.getElementById("computer-score");




const rockBtn=document.getElementById("rock");
const paperBtn=document.getElementById("paper");
const scissorBtn=document.getElementById("scissors");

rockBtn.addEventListener("click",(e)=>(singleRound("rock",computerPlay())));
paperBtn.addEventListener("click",(e)=>(singleRound("paper",computerPlay())));
scissorBtn.addEventListener("click",(e)=>(singleRound("scissor",computerPlay())));

