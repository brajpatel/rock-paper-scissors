let showYourChoice = document.getElementById('your-choice')
let showCompChoice = document.getElementById('comp-choice')
let result = document.getElementById('result')

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
    }
    if(showYourChoice.innerHTML == "Rock" && showCompChoice.innerHTML == "Paper") {
        result.innerHTML = "You lost this round!"
    }
    if(showYourChoice.innerHTML == "Rock" && showCompChoice.innerHTML == "Scissors") {
        result.innerHTML = "You won this round!"
    }
    if(showYourChoice.innerHTML == "Paper" && showCompChoice.innerHTML == "Rock") {
        result.innerHTML = "You won this round!"
    }
    if(showYourChoice.innerHTML == "Paper" && showCompChoice.innerHTML == "Paper") {
        result.innerHTML = "It's a draw!"
    }
    if(showYourChoice.innerHTML == "Paper" && showCompChoice.innerHTML == "Scissors") {
        result.innerHTML = "You lost this round!"
    }
    if(showYourChoice.innerHTML == "Scissors" && showCompChoice.innerHTML == "Rock") {
        result.innerHTML = "You lost this round!"
    }
    if(showYourChoice.innerHTML == "Scissors" && showCompChoice.innerHTML == "Paper") {
        result.innerHTML = "You won this round!"
    }
    if(showYourChoice.innerHTML == "Scissors" && showCompChoice.innerHTML == "Scissors") {
        result.innerHTML = "It's a draw!"
    }
}