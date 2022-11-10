export {q}
let q = [
    {
        question:"what does Html stands for? ",
        answers :{
            A:"yamen",
            B:"majd",
            c:"yasser",
            d:"yassin"
        },
        correctAns : "yamen"
    },
    {
        question:"How old are You",
        answers :{
            A:"22",
            B:"25",
            c:"44",
            d:"35"
        },
        correctAns : "22"
    },
    {
        question:"Where are you from",
        answers :{
            A:"syria",
            B:"lebanon",
            c:"turkey",
            d:"iraq"
        },
        correctAns : "syria"
    },
    {
        question:"Where are you from",
        answers :{
            A:"syria",
            B:"lebanon",
            c:"turkey",
            d:"iraq"
        },
        correctAns : "syria"
    },
    {
        question:"Where are you from",
        answers :{
            A:"syria",
            B:"lebanon",
            c:"turkey",
            d:"iraq"
        },
        correctAns : "syria"
    },
    {
        question:"Where are you from",
        answers :{
            A:"syria",
            B:"lebanon",
            c:"turkey",
            d:"iraq"
        },
        correctAns : "syria"
    },
    {
        question:"Where are you from",
        answers :{
            A:"syria",
            B:"lebanon",
            c:"turkey",
            d:"iraq"
        },
        correctAns : "syria"
    },
    {
        question:"Where are you from",
        answers :{
            A:"syria",
            B:"lebanon",
            c:"turkey",
            d:"iraq"
        },
        correctAns : "syria"
    },
    {
        question:"Where are you from",
        answers :{
            A:"syria",
            B:"lebanon",
            c:"turkey",
            d:"iraq"
        },
        correctAns : "syria"
    },
    {
        question:"Where are you from",
        answers :{
            A:"syria",
            B:"lebanon",
            c:"turkey",
            d:"iraq"
        },
        correctAns : "syria"
    }
    
]

// if i want to add 20 question ...the condition of chooseQuestion 
// must changed ....carefull with the numbers
export let questionNumbers = 0
export function chooseQuestion(){
    // choose a Rando question
    if(q.length >=! 0){
        let choosenQ = q[Math.floor(Math.random() * q.length)]
        // console.log(choosenQ)

        //remove the choosen question from q ... so not show agian
        q.splice(q.indexOf(choosenQ),1)
        // console.log("you see now",q.length+1 , q.length , "number of questions left")
        let correctAns = choosenQ.correctAns
        let Arranswers = [choosenQ.answers.A,choosenQ.answers.B,choosenQ.answers.c,choosenQ.answers.d]
        questionNumbers++
        // console.log("q length = " , q.length)
        return [choosenQ.question , Arranswers , correctAns]
    }
    // if the questions are done
    else{
        return false
    }
}