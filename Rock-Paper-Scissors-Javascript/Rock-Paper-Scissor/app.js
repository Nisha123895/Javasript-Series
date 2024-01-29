let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSco = document.querySelector("#user-score");
const compSco = document.querySelector("#comp-score");

const genComputerChoice = () => {
    //randomly generate rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw, Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userSco.innerText = userScore;
        msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compSco.innerText = compScore;
        msg.innerText = `You lose!, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};



const playGame = (userChoice) => {
    console.log("user choice =", userChoice);

    const compChoice = genComputerChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        //Draw Condition
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //comp generates scissors or paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //comp generates rock or scissor
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //comp generates rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }
};



choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});