// import preparelines, { a } from "./preparingLines.js"
import lines from '../lines.json' assert{type:"json"}

// Componentes
let testDurationBtns = document.querySelectorAll(".container .control-container .row-timer .buttons button")
let wordListBtns = document.querySelectorAll(".container .control-container .row-word .buttons button")
console.log(wordListBtns[0])
let numbersBtns = document.querySelectorAll(".container .control-container .row-number .buttons button")
let TimerBtns = document.querySelectorAll(".container .control-container .row-showTimer .buttons button")
let inputAreat = document.querySelector(".container .control input")
let time = document.querySelector(".container .game-container .control span.timer")
let AgainButton = document.querySelector(".container .game-container .control button")
let line1 = document.querySelector(".container .game-container .words-line .line-one")
let level 
let index = 0


// wordListBtns[0].onclick = function(){
//     level = lines[0].simple[]
//     chooseline()
// }
// wordListBtns[0].onclick = function(){
//     level = lines[0].advance[]
//     chooseline()
// }
// numbersBtns[0].onclick = function(){
//     number
// }
// backedtext = preparelines()
level = lines[0].simple["lines-noNumber"]
chooseline()
// console.log(lines)

function chooseline(){
    let lines = level    
    putLine(lines)


    // timeout so the inputarea.value ="" works inside the put lines method
}

inputAreat.addEventListener("focus", function(e){
    console.log(inputAreat.value)
    startgame(e)
})
inputAreat.addEventListener("keydown",function(e){
    startgame(e)
    // timer()
})
function startgame(e){
    let lettes = document.querySelectorAll(".container .game-container .words-line .line-one .letters_container span")
    console.log(index)
    console.log(lettes.length)
    e.target.onkeydown = function(letter){
        if(index === lettes.length-1){
            // return alert("done")
            inputAreat.value = ""
            line1.innerHTML = ""
            chooseline()
            index = 0
            console.log("done line ")
            // get new line...put the text inside function ...
            // even when the page reloads ...we call this functioin
        }
        else{
            if(letter.key === " "){
            inputAreat.value = ""
            }  
            else if(letter.key ==="Backspace"){
                if(index === 0){
                    return
                }
                // console.log(index)
                lettes[index].classList.remove("current")
                lettes[index-1].classList.add("current")
                lettes[index-1].classList.remove("true")
                lettes[index-1].classList.remove("false")
                index--
                return
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
        }
    // console.log(inputAreat.value)

    } 
    // console.log(index)
}
function putLine(lines){  
    // choose random number here
    let random = Math.floor(Math.random() * lines.length)
    console.table(lines)
    let lineone = lines[random]
    lines.splice(random,1)
    // its removed from the root ...its false this way
    console.table(lines)
    lettersfun(lineone)
    let lettes = document.querySelectorAll(".container .game-container .words-line .line-one .letters_container span")
    lettes[0].classList.add("current")
    inputAreat.value =""
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




// fix when new line comes...empty input
// fix delete the line from these line that i choose






let min = document.querySelector(".container .timer div .min")
let sec = document.querySelector(".container .timer div .sec")
// console.log(min.textContent)
let test = "9"
// console.log(test)
// console.log(test < "10")
// false
// console.log(test+1)
//91 string


let test3 = "10"
// console.log(test3+"1")

let test2 = 9
// console.log(9<10)
//true

function timer(){
    // let minutes = +min.textContent
    if(min.textContent !=="0"){
        min.textContent--
        sec.textContent ="59"
    }
    let minutes = setInterval(function(){
        if(min.textContent !== "0"){
            min.textContent--
        }
        else{
            clearInterval(minutes)
        }
    },60000)
    let seconds = setInterval(function(){
        if(sec.textContent === "0" && min.textContent >"0"){
            sec.textContent = "60"
        }
        if(min.textContent === "0" && sec.textContent === "0"){
            clearInterval(minutes)
            clearInterval(seconds)
            return
            // end game ...open windo to show the result
        }
            // if(sec.textContent <= 10){
            //     sec.innerHTML ="0"+ sec.textContent
            //     console.log("hello")
            // }
        sec.textContent--
    },1000)
    pari
}
// timer()


testDurationBtns.forEach(function(e,i){
    e.addEventListener("click",function(){
        e.classList.add("choosen")
        testDurationBtns.forEach(function(ele,index){
            if(index !== i){
                ele.classList.remove("choosen")
            }
        })
        time.textContent = e.textContent
    })

})

wordListBtns.forEach(function(e,i){
    e.addEventListener("click",function(){
        e.classList.add("choosen")
        wordListBtns.forEach(function(ele,index){
            if(index !== i){
                ele.classList.remove("choosen")
            }
        })
    })
})
TimerBtns.forEach(function(e,i){
    e.addEventListener("click",function(){
        if(e.attributes["data-value"].value ==="off"){
            time.style.display = "none"
        }
        else{
            time.style.display = "block"
        }
        e.classList.add("choosen")
        TimerBtns.forEach(function(ele,index){
            if(index!== i){
                ele.classList.remove("choosen")
            }
        })
    })
})
numbersBtns.forEach(function(e,i){
    e.addEventListener("click",function(){
        e.classList.add("choosen")
        numbersBtns.forEach(function(ele,index){
            if(index!==i){
                ele.classList.remove("choosen")
            }
        })
    })

})

