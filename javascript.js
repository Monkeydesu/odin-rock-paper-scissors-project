function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        x = "rock"
    } else if (x === 2) {
        x = "paper"
    } else if (x === 3) {
        x = "scissors"
    }
    return x
}


function playerChoice() {
    isValid = false;
    while (isValid === false) {
        let y = prompt("Please enter rock, paper, or scissors: ");
        if (y === "rock" || y === "paper" || y === "scissors") {
            isValid = true
            return y
        }
        else {
            console.warn("Please enter a valid answer.")
        }
    }
}


function playRound(computerChoice, playerChoice) {
    console.log("The computer chose " + computerChoice + ", and you chose " + playerChoice + ".")
    if (computerChoice === playerChoice) {
        console.log("It's a tie")
    }
    else if (computerChoice === "rock") {
        if (playerChoice === "paper") {
            console.log("You win, nice!")
        }
        else {
            console.log("You lose, sorry.")
        }
    }
    else if (computerChoice === "paper") {
        if (playerChoice === "scissors") {
            console.log("You win, nice!")
        }
        else {
            console.log("You lose, sorry.")
        }
    }
    else if (computerChoice === "scissors") {
        if (playerChoice === "rock") {
            console.log("You win, nice!")
        }
        else {
            console.log("You lose, sorry.")
        }
    }
}


function game() {
    let i = 1;
    while (i < 6) {
        console.log("ROUND " + i)
        playRound(getComputerChoice(), playerChoice())
        i ++
    }
}

game()