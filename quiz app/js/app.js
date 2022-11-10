import {chooseQuestion, q, questionNumbers} from "./questions.js";
import { localStorgeBackUsers, MakeResultList } from "./result.js";
import {newUser} from "./user.js"


let trueAns = 0



let startButton = document.querySelector(".intro-container .form button")
let inputForm = document.querySelector(".intro-container .form")
let userName = document.querySelector(".intro-container .form input.input-name")
startButton.onclick = function(){
    if(userName.value === ""){
        return alert("please enter your name")
    }
    changeQuestion()
    inputForm.style.display = "none"
    document.querySelector(".intro-container .count-down").style.display = "flex"
    countdown()
}

let [a,b ,c] = chooseQuestion()
// a is the question
// b is an a array of answers
// c is the true answer


function changeQuestion(){
    document.querySelector(".game-container .question-contaier h3 span").textContent = questionNumbers
    document.querySelector(".game-container .question-shower .number-shower span").textContent = questionNumbers
    let answersdivs = document.querySelectorAll(".game-container .question-contaier .answers span")
    let question11 = document.querySelector(".game-container .question-contaier h3 #Question")
    question11.textContent = a
    answersdivs.forEach((e , i) =>{
        e.textContent = b[i]
        e.parentElement.onclick = function(){
            if(e.textContent === c){
                // console.log(true , "answer") 
                trueAnswer()
                trueAns++
            }
            else{
                // console.log(false , "answer")
                falseAnswer()
            }
            let check = chooseQuestion()
            if(check === false){
                alert("Show result")
                newUser(trueAns)
                localStorgeBackUsers()
            }
            else{
                [a,b,c] = check
            }
            changeQuestion()
        }
    })
}



function countdown(){
    let number = document.querySelector(".intro-container .count-down .number")
    number.textContent = "3"
    let count = setInterval(function(){
        number.textContent--
        if(number.textContent === "0"){
            clearInterval(count)
            number.style.animationPlayState = "paused"
            number.style.display="none"
            document.querySelector(".intro-container .count-down").parentElement.style.display = "none"
        }
    },1500)
}



let pointNum = 0
let questionShower = document.querySelectorAll(".game-container .question-shower .points-shower span")
function trueAnswer(){
    let point = questionShower[pointNum]
    point.classList.add("true")
    point.classList.remove("off")
    pointNum++
}
function falseAnswer(){
    let point = questionShower[pointNum]
    point.classList.add("false")
    point.classList.remove("off")
    pointNum++
}




// change the questions
// list with the same points ...same backcol if they all have 10 points