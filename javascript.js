function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        x = "rock"
    } else if (x === 2) {
        x = "paper"
    } else if (x === 3) {
        x = "scissors"
    }
    return console.log(x)
}


function playerChoice() {
    isValid = false;
    while (isValid === false) {
        let y = prompt("Please enter rock, paper, or scissors: ");
        if (y === "rock" || y === "paper" || y === "scissors") {
            isValid = true
            return console.log(y)
        }
        else {
            console.log("Please enter a valid answer.")
        }
    }
}


getComputerChoice()
playerChoice()