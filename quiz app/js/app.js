// // import {arr} from "./questions.js"
// import {arr as array } from "./questions.js"
// import {sayhello as message} from "./questions.js"
// console.log(array)
// message()
// import * as all from "./questions.js"
// console.log(all.arr)
// all.sayhello()


import {chooseQuestion, q} from "./questions.js";
import {newUser} from "./user.js"



let [a,b ,c] = chooseQuestion()
function changeQuestion(){
    let answersdivs = document.querySelectorAll(".game-container .question-contaier .answers span")
    let question11 = document.querySelector(".game-container .question-contaier h3 #Question")
    question11.textContent = a
    answersdivs.forEach((e , i) =>{
        e.textContent = b[i]
        e.parentElement.onclick = function(){
            if(e.textContent === c){
                console.log(true , "answer") 
            }
            else{
                console.log(false , "answer")
            }
            let check = chooseQuestion()
            if(check === false){
                alert("done")
                window.location = " "
            }
            else{
                [a,b,c] = check
            }
            changeQuestion()
        }
    })
}
changeQuestion()



let startButton = document.querySelector(".intro-container .form button")
let inputForm = document.querySelector(".intro-container .form")
let userName = document.querySelector(".intro-container .form input.input-name")
startButton.onclick = function(){
    if(userName.value === ""){
        return alert("please enter your name")
    }
    newUser()
    inputForm.style.display = "none"
    document.querySelector(".intro-container .count-down").style.display = "flex"
    countdown()
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
