var text
fetch('/lines.json')
.then(response => response.text())
.then(text1 => text = text1)

// setTimeout(function(){
//     console.log(JSON.parse(text))
// },100)



// Componentes
let testDurationBtns = document.querySelectorAll(".container .control-container .row-timer .buttons button")
let wordListBtns = document.querySelectorAll(".container .control-container .row-word .buttons button")
let numbersBtns = document.querySelectorAll(".container .control-container .row-number .buttons button")
let TimerBtns = document.querySelectorAll(".container .control-container .row-showTimer .buttons button")
let inputAreat = document.querySelector(".container .control input")
let time = document.querySelector(".container .game-container .control span.timer")
let AgainButton = document.querySelector(".container .game-container .control button")

inputAreat.addEventListener("focus", function(e){
    console.log(e.target)
    e.target.onkeydown = function(){
        console.log("hello")
        // start the game
        //
    }

})


//when user enters the game ...there are tow status 
// one ...he plays on the default settings 1:00 , simple , off , on
// in this way ... the lines are prepared on a loaded page
// tow ... he changes the seetings of the game
// in this way ... the lines will be changed ...using the function prepare lines
// ok .. fucntion preparelines ...will be called when i focus the input
// when user start typing ...the game starts 

// however when the game starts...we call function of the carent
// function letters ()
