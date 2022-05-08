let showYourChoice = document.getElementById('your-choice')
let showCompChoice = document.getElementById('comp-choice')
let result = document.getElementById('result')

let yourScore = document.getElementById('your-score')
let compScore = document.getElementById('comp-score')
let playerScore = 1
let computerScore = 1

let options = document.querySelectorAll('button')

let userchoice;

options.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userchoice = e.target.id
    showYourChoice.innerHTML = userchoice
    
    compChoice()
}))

function compChoice() {
    const choices = ["Rock", "Paper", "Scissors"]

    const num = Math.floor(Math.random() * choices.length)

    showCompChoice.innerHTML = choices[num]

    if(showYourChoice.innerHTML == "Rock" && showCompChoice.innerHTML == "Rock") {
        result.innerHTML = "It's a draw!"
        result.style.color = "Black"
    }
    if(showYourChoice.innerHTML == "Rock" && showCompChoice.innerHTML == "Paper") {
        result.innerHTML = "You lost this round!"
        result.style.color = "Red"
        compScore.textContent = computerScore++
    }
    if(showYourChoice.innerHTML == "Rock" && showCompChoice.innerHTML == "Scissors") {
        result.innerHTML = "You won this round!"
        result.style.color = "Green"
        yourScore.textContent = playerScore++
    }
    if(showYourChoice.innerHTML == "Paper" && showCompChoice.innerHTML == "Rock") {
        result.innerHTML = "You won this round!"
        result.style.color = "Green"
        yourScore.textContent = playerScore++
    }
    if(showYourChoice.innerHTML == "Paper" && showCompChoice.innerHTML == "Paper") {
        result.innerHTML = "It's a draw!"
        result.style.color = "Black"
    }
    if(showYourChoice.innerHTML == "Paper" && showCompChoice.innerHTML == "Scissors") {
        result.innerHTML = "You lost this round!"
        result.style.color = "Red"
        compScore.textContent = computerScore++
    }
    if(showYourChoice.innerHTML == "Scissors" && showCompChoice.innerHTML == "Rock") {
        result.innerHTML = "You lost this round!"
        result.style.color = "Red"
        compScore.textContent = computerScore++
    }
    if(showYourChoice.innerHTML == "Scissors" && showCompChoice.innerHTML == "Paper") {
        result.innerHTML = "You won this round!"
        result.style.color = "Green"
        yourScore.textContent = playerScore++
    }
    if(showYourChoice.innerHTML == "Scissors" && showCompChoice.innerHTML == "Scissors") {
        result.innerHTML = "It's a draw!"
        result.style.color = "Black"
    }
    if(playerScore > 5) {
        result.innerHTML = "YOU WIN!"
        result.style.color = "Green"
    }
    if(computerScore > 5) {
        result.innerHTML = "YOU LOST!"
    }

}

let resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', () => location.reload())