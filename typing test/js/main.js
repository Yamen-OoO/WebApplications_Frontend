import preparelines, { a } from "./preparingLines.js"
// Componentes
let testDurationBtns = document.querySelectorAll(".container .control-container .row-timer .buttons button")
let wordListBtns = document.querySelectorAll(".container .control-container .row-word .buttons button")
let numbersBtns = document.querySelectorAll(".container .control-container .row-number .buttons button")
let TimerBtns = document.querySelectorAll(".container .control-container .row-showTimer .buttons button")
let inputAreat = document.querySelector(".container .control input")
let time = document.querySelector(".container .game-container .control span.timer")
let AgainButton = document.querySelector(".container .game-container .control button")
let line1 = document.querySelector(".container .game-container .words-line .line-one")
let backedtext 
window.onload = function(){
    backedtext = preparelines()
    chooseline()
}
function chooseline(){
    setTimeout(() => {
        let lines = Array(backedtext)[0].split(",")
        // console.log(lines)
        putLine(lines)
    }, 0);
}

let index = 0
let currentNum = 0
inputAreat.addEventListener("focus", function(e){
    startgame(e)
})
inputAreat.addEventListener("keydown",function(e){
    startgame(e)
})
function startgame(e){
    // console.log(e)
    console.log(index)
    let lettes = document.querySelectorAll(".container .game-container .words-line .line-one .letters_container span")
    console.log(lettes.length)
    e.target.onkeydown = function(letter){
        // console.log(index)
        if(index === lettes.length-1){
            // return alert("done")
            line1.innerHTML = ""
            inputAreat.value =""
            chooseline()
            index = 0
            currentNum = 0
            // get new line...put the text inside function ...
            // even when the page reloads ...we call this functioin
        }
        else{
            if(letter.key === " "){
            inputAreat.value = ""
            }  
            else if(letter.key ==="Backspace"){
                console.log(index)
                index--
                lettes[index+1].classList.remove("current")
                lettes[index].classList.add("current")
                lettes[index].classList.remove("true")
                lettes[index].classList.remove("false")
                // lettes[index].style.color = "white"
            }    
            if(letter.key === lettes[index].textContent){
                lettes[index].classList.add("true")
                lettes[index].classList.remove("current")
                lettes[index+1].classList.add("current") 
            }
            else{
                lettes[index].classList.add("false")
                lettes[index].classList.remove("current")
                lettes[index+1].classList.add("current") 
            }
            index++
            currentNum++
        }
    } 
}
function putLine(lines){  
    // choose random number here
    let random = Math.floor(Math.random() * lines.length)
    let lineone = lines[random]
    lettersfun(lineone)
    let lettes = document.querySelectorAll(".container .game-container .words-line .line-one .letters_container span")
    lettes[0].classList.add("current")
    // console.log(lettes[0].textContent)
}


//when user enters the game ...there are tow status :
// one ...he plays on the default settings 1:00 , simple , off , on
// in this way ... the lines are prepared on a loaded page
// tow ... he changes the seetings of the game
// in this way ... the lines will be changed ...using the function prepare lines
// ok .. fucntion preparelines ...will be called when i focus at the input
// when user start typing ...the game starts 

// however when the game starts...we call function of the carent
// function letters ()




// to creat the spans of our comed line ... 
// we call it when:
// 1) we load the page
// 2) when we end up our line to get a new one
function lettersfun(lineone){
    let letters = document.createElement("div")
    letters.className = "letters_container"
    for(let i =0 ; i<lineone.length; i++){
        let letter = document.createElement("span")
        letter.classList.add("letter")
        letter.textContent = lineone[i]
        if(lineone[i] === " "){
            letter.classList.add("space")
        }
        letters.appendChild(letter)
    }
    line1.appendChild(letters)
}






