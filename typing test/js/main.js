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
let line2 = document.querySelector(".container .game-container .words-line .line-tow")
console.log(line1)
console.log(line2)


inputAreat.addEventListener("focus", function(e){
    console.log(e.target)
    e.target.onkeydown = function(e){
        console.log(e.key)
        // start the game
        //
    }

})
console.log(a)
let text = preparelines()

setTimeout(() => {
    let lines = Array(text)[0].split(",")
    console.table(lines)
    putLines(lines)
}, 1000);
function putLines(lines){  
    line1.textContent = lines[1]
    line2.textContent = lines[5]
    console.log(line1)
    console.log(line2)
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
