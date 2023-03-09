import data from './data.json'  assert { type: "json" };
console.log(data)


let levels = document.querySelectorAll(".game-levels-container .levels button")

let LEVEL
let cardsArray = []


levels.forEach((lvl) => {
    lvl.onclick = (lvl) => {
        LEVEL = lvl.target.dataset.lvl
        console.log(LEVEL)
        document.querySelector(".game-levels-container").style.display = "none"
        MakeGame()
    }
})




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
    console.log(data.length)
    MackCards()
    ClickCard()

}


    function MackCards() {
    data.map((card) => {
        Card(card)
    })
    console.log(cardsArray)
    cardsArray.forEach((card)=>{
        document.querySelector(".cards").appendChild(card)
    })
    
}

function Card(card) {
    // we make 2 cards
    for (let i = 0; i <= 1; i++) {
        let Card = document.createElement('div')
        Card.className = "flip-card"
        Card.setAttribute("data-languageName",card.languageName)

        let innderCard = document.createElement("div")
        innderCard.className = "flip-card-inner"

        let flipCardFront = document.createElement("div")
        flipCardFront.className = "flip-card-front"

        let BackImg = document.createElement("img")
        BackImg.src = card.cardImg

        
        let flipCardBack = document.createElement("div")
        flipCardBack.className = "flip-card-back"


        let FrontImg = document.createElement("img")
        FrontImg.className = "front-img"
        FrontImg.src="https://imgs.search.brave.com/LzKqNHZWtpMuoamDm5eqZscJS7oLDOjFE_Nr5jx-7Dc/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY29tcHV0ZXIt/NzEvNjQvY29kaW5n/LXByb2dyYW1tZXIt/Y29kZS1wcm9ncmFt/bWluZy1sYW5ndWFn/ZS01MTIucG5n"

        flipCardBack.appendChild(BackImg)
        flipCardFront.appendChild(FrontImg)

        innderCard.appendChild(flipCardBack)
        innderCard.appendChild(flipCardFront)
        Card.append(innderCard)
        cardsArray.push(Card)
    }

}


function ClickCard(){
    let cards = document.querySelectorAll(".cards .flip-card")
    let openCards ={
        opendCards:0,
        card1Name :"",
        card2Name :"",
        cardsNumver:[]
    }
    cards.forEach((card)=>{
        card.onclick = function(){
            if(!card.firstChild.classList.contains("open") && openCards.opendCards !== 2){
                card.firstChild.classList.add("open") 
                openCards.cardsNumver.push(card)
                let one = Object.keys(openCards)[openCards.opendCards + 1]
                openCards[one] = card.dataset.languagename
                openCards.opendCards++
                console.log(openCards)
                if(openCards.opendCards === 2){
                    CompareCards([openCards.cardsNumver,openCards.card1Name , openCards.card2Name])
                    openCards.opendCards = 0
                    openCards.cardsNumver = []
                }
            }
            else{
                console.log('noo')
            }
        }
    })
}

function CompareCards(ThetowCards){
    console.log(ThetowCards[2])
    if(ThetowCards[1] === ThetowCards[2]){
        console.log("smaee")
        return true
    }
    else{
        setTimeout(function(){
            console.log(ThetowCards[0][0].firstChild.classList.remove("open"))
            console.log(ThetowCards[0][1].firstChild.classList.remove("open"))
        },1000)
    }

}