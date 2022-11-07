// // import {arr} from "./questions.js"
// import {arr as array } from "./questions.js"
// import {sayhello as message} from "./questions.js"
// console.log(array)
// message()
// import * as all from "./questions.js"
// console.log(all.arr)
// all.sayhello()

let question11 = document.querySelector(".game-container .question-contaier h3 #Question")

import {chooseQuestion, q} from "./questions.js";
import {newUser} from "./user.js"
// console.log(q[0])
// console.log(q[0].question)
// console.log(q[0].correctAns)

// console.log(chooseQuestion())
// console.log(q)
// console.log(chooseQuestion())
// console.log(q)
// console.log(chooseQuestion())
// console.log(q)



// console.log(q)
// let [a,b ,c] = chooseQuestion()
// console.log(a)
// console.log(b)
// console.log(c)
// let answersdivs = document.querySelectorAll(".game-container .question-contaier .answers span")
// // console.log(answersdivs)
// question11.textContent = a
// answersdivs.forEach((e , i) =>{
//     e.textContent = b[i]
//     e.parentElement.onclick = function(){
//         if(e.textContent === c){
//             console.log(true)
//         }
//         else{
//             console.log("false")
//         }
//         [a,b ,c] = chooseQuestion()
//         console.log(q)
//         console.log(a)
//         console.log(b)
//         console.log(c)
//     }
// })



let startButton = document.querySelector(".intro-container .form button")
let inputForm = document.querySelector(".intro-container .form")
startButton.onclick = function(){
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