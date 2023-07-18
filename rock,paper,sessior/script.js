
let userCards = document.querySelectorAll(".user-section .owl-item .card")
let userSection = document.querySelector(".user-section")
let computerSection = document.querySelector(".computer-section")
let UserResultChossenCard = document.querySelector(".user-ChoosenCard")
let computerResultChossenCard = document.querySelector(".computer-ChoosenCard")
let resultPlaceHolcer = document.querySelector(".result")
let userPoints = document.querySelectorAll(".userPoints .point")
let computerPoints = document.querySelectorAll(".computerPoints .point")



let userChossenCard
let computerChossenCard
let userpointsNumber = 0
let computerpointsNumber = 0
let choices = ['paper', "rock", 'scissor']
userCards.forEach((card) => {
    card.addEventListener("click", (e) => {
        userChossenCard = e.target.attributes['data-value'].value
        startEvent()
    })
})


function startEvent() {
    computerChossenCard = choices[Math.floor(Math.random() * choices.length)]
    let result = getResult(userChossenCard, computerChossenCard)
    startAnimation(result)

}
function getResult(u, c) {
    if (u === c) {
        return "draw"
    }
    else {
        switch (`${u} ${c}`) {
            case 'rock scissor':
                return "user win"
                break;
            case 'paper rock':
                return "user win"
                break;
            case 'scissor paper':
                return "user win"
                break;

            default:
                return "computer win"
                break;
        }
    }
}


function startAnimation(result) {
    setTimeout(() => {
        // ^ choosen card and the cardSection has the same hieght ..so we user(40%)
        userSection.style.bottom = "-40%"
        computerSection.style.top = "-40%"
    }, 1000);
    setTimeout(() => {
        UserResultChossenCard.firstElementChild.firstElementChild.src = `/imgs/${userChossenCard}.png`
        computerResultChossenCard.firstElementChild.firstElementChild.src = `/imgs/${computerChossenCard}.png`
        UserResultChossenCard.style.bottom = "0"
        computerResultChossenCard.style.top = "0"
        resultPlaceHolcer.style.display = "grid"
        resultPlaceHolcer.style.opacity = "0"
    }, 2000);

    setTimeout(() => {
        resultPlaceHolcer.style.opacity = "1"
        resultPlaceHolcer.firstElementChild.textContent = result
        if (result === "computer win") {
            computerPoints[computerpointsNumber].style.backgroundColor = "#FF7B7B"
            computerpointsNumber++
        }
        else if (result === "user win") {
            userPoints[userpointsNumber].style.backgroundColor = "#2EB3FD"
            userpointsNumber++
        }
    }, 4000);

    setTimeout(() => {
        UserResultChossenCard.style.bottom = "-40%"
        computerResultChossenCard.style.top = "-40%"
        resultPlaceHolcer.style.display = "none"
    }, 7000);
    setTimeout(()=>{
        if (computerpointsNumber === 2) {
            alert('computer wins')
            window.location = ''
        }
        else if (userpointsNumber === 2){
            alert('user wins')
            window.location = ''
        }
    },8000)
    setTimeout(() => {
        userSection.style.bottom = "0"
        computerSection.style.top = "0"
    }, 9000);
}