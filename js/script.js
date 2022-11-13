let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let historyList = document.querySelector("#historyList");


function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win! 🔥"
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function () { document.getElementById(userChoice).classList.remove("green-glow") }, 500);



}



function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ". You lose! 😭"
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function () { document.getElementById(userChoice).classList.remove("red-glow") }, 500);
}

function draw(userChoice, computerChoice) {

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ". Draw! 😑"
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function () { document.getElementById(userChoice).classList.remove("gray-glow") }, 500);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    let historyItem = document.createElement("li");

    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":

            win(userChoice, computerChoice);
            historyItem.textContent = "User defeated Computer 🔥";
            historyItem.style.backgroundColor = "green";
            historyList.appendChild(historyItem);


            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            historyItem.textContent = "Computer defeated User 😭";
            historyItem.style.backgroundColor = "red"
            historyList.appendChild(historyItem);
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            historyItem.textContent = "Draw 😑";
            historyItem.style.backgroundColor = "black"
            historyList.appendChild(historyItem);
            break
    }
}



function main() {
    rock_div.addEventListener("click", function () {
        game("r");
    })

    paper_div.addEventListener("click", function () {
        game("p");
    })

    scissors_div.addEventListener("click", function () {
        game("s");
    })
}

main();


