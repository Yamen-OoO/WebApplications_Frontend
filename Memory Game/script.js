import data from './data.json'  assert { type: "json" };
// console.log(data)

var backAudio = new Audio('/backMusic.mp3');
var correctAudio = new Audio('/Correct Answer Sound Effect.mp3');


let levels = document.querySelectorAll(".game-levels-container .levels button")

let LEVEL
let cardsArray = []
let trueChoices = 0


levels.forEach((lvl) => {
    lvl.onclick = (lvl) => {
        LEVEL = lvl.target.dataset.lvl
        // console.log(LEVEL)
        document.querySelector(".game-levels-container").style.display = "none"
        backAudio.play();
        MakeGame()
    }
})



function showCards(){
    setTimeout(()=>{
        // let cardsContainer = document.querySelector(".game-container .cards")
        // cardsContainer.style.curor = "pointer"
        let cardsContainer = document.querySelector(".game-container .cards")
        let cards =document.querySelectorAll(".game-container .cards .flip-card .flip-card-inner")
        cards.forEach((card)=>{
            card.classList.add("open")
        })
        CloseCards()
    },1000)
}

function CloseCards(){
    setTimeout(() => {
        let cardsContainer = document.querySelector(".game-container .cards")
        let cards =document.querySelectorAll(".game-container .cards .flip-card .flip-card-inner")
        cards.forEach((card)=>{
            card.classList.remove("open")
            cardsContainer.classList.remove("noclick")
        })
    }, 4000);
}
// showCards()

function StopClick(){
    let cardsContainer = document.querySelector(".game-container .cards")
    cardsContainer.classList.add("noclick")
    setTimeout(()=>{
        cardsContainer.classList.remove("noclick")
    },1300)
}

function MakeGame() {
    if (LEVEL === "16") {
        EasyLevel(4)

    }
    else if (LEVEL === "20") {
        EasyLevel(2)
    }
    else if (LEVEL === "24") {
        EasyLevel(0)
    }
}




function EasyLevel(number) {
    data.length = data.length - number
    // console.log(data.length)
    trueChoices = data.length
    MackCards()
    ClickCard()
    

}


function MackCards() {
    // Make the cards
    data.map((card) => {
        Card(card)
    })
    // console.log(cardsArray)

    // put cards in the array
    cardsArray.forEach((card) => {
        document.querySelector(".cards").appendChild(card)
    })
    let cardsContainer = document.querySelector(".game-container .cards")
    cardsContainer.classList.add("noclick")
    showCards()

}

function Card(card) {
    // we make 2 cards
    for (let i = 0; i <= 1; i++) {
        let Card = document.createElement('div')
        Card.className = "flip-card"
        Card.setAttribute("data-languageName", card.languageName)
        
        let innderCard = document.createElement("div")
        innderCard.className = "flip-card-inner"
        // innderCard.classList.add("open")
        
        let flipCardFront = document.createElement("div")
        flipCardFront.className = "flip-card-front"
        
        let BackImg = document.createElement("img")
        BackImg.src = card.cardImg


        let flipCardBack = document.createElement("div")
        flipCardBack.className = "flip-card-back"


        let FrontImg = document.createElement("img")
        FrontImg.className = "front-img"
        FrontImg.src = '/imgs/quetionmark.png'

        flipCardBack.appendChild(BackImg)
        flipCardFront.appendChild(FrontImg)

        let doneLayer = document.createElement("div")
        // let trueimg = document.createElement("img")
        // trueimg.src="https://banner2.kisspng.com/20180601/opx/kisspng-check-mark-clip-art-true-sign-5b115b415d4340.346610361527864129382.jpg"
        // doneLayer.appendChild(trueimg)
        
        innderCard.appendChild(flipCardBack)
        innderCard.appendChild(flipCardFront)
        Card.append(innderCard)
        Card.appendChild(doneLayer)
        cardsArray.push(Card)
    }

}


function ClickCard() {
    let cards = document.querySelectorAll(".cards .flip-card")
    let openCards = {
        opendCards: 0,
        card1Name: "",
        card2Name: "",
        cardsNumver: []
    }
    cards.forEach((card) => {
        card.onclick = function () {
            // console.log("clicked")
            if (!card.firstChild.classList.contains("open") && openCards.opendCards !== 2) {
                card.firstChild.classList.add("open")
                openCards.cardsNumver.push(card)
                let one = Object.keys(openCards)[openCards.opendCards + 1]
                openCards[one] = card.dataset.languagename
                openCards.opendCards++
                // console.log(openCards)
                if (openCards.opendCards === 2) {
                    CompareCards([openCards.cardsNumver, openCards.card1Name, openCards.card2Name])
                    openCards.opendCards = 0
                    openCards.cardsNumver = []
                    checkCardSLeft()
                }
            }
            else {
                // console.log('noo')
            }
        }
    })
}

function CompareCards(ThetowCards) {
    console.log(ThetowCards[2])

    // true
    if (ThetowCards[1] === ThetowCards[2]) {
        setTimeout(function () {
            ThetowCards[0][0].lastChild.classList.add("done-card")
            ThetowCards[0][1].lastChild.classList.add("done-card")
            correctAudio.play()
        }, 1000)
        trueChoices--
        // console.log("smaee")
        // return true
    }
    // false
    else {
        setTimeout(function () {
            ThetowCards[0][0].firstChild.classList.add("open")
            ThetowCards[0][1].firstChild.classList.add("open")
        }, 500)
        setTimeout(function () {
            ThetowCards[0][0].classList.add("shake-card")
            ThetowCards[0][1].classList.add("shake-card")
        }, 1000)
        setTimeout(function () {
            ThetowCards[0][0].firstChild.classList.remove("open")
            ThetowCards[0][1].firstChild.classList.remove("open")

            ThetowCards[0][0].classList.remove("shake-card")
            ThetowCards[0][1].classList.remove("shake-card")
        }, 1500)
    }
    StopClick()


}

function checkCardSLeft(){
    if(trueChoices === 0){
        setTimeout(()=>{
            alert("you win ...end this game")
            window.location.reload()
        },2000)
    }
}



// show text functions
let text = "Hello user in memory game .... rules are simple : 1) choose your level ... keep in you mind the cards ...to guess the cards when they closed"

let textArray = text.split("")

console.log(textArray)

let textcontainer = document.querySelector(".deatails-text-show p")

function AddLetters(){
    let i = 0
    setInterval(()=>{
        if(i < textArray.length){
            console.log(textArray[i])
            textcontainer.textContent = textcontainer.textContent + textArray[i]
        }
        i++
    },100)

}

AddLetters()