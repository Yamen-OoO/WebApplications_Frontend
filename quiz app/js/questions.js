export {q}
let q = [
    {
        question:"The normal temperature of human body is?",
        answers :{
            A:"42.5c",
            B:"36.9c",
            c:"98.4c",
            d:"82.2c"
        },
        correctAns : "36.9c"
    },
    {
        question:"Insulin is secreted by",
        answers :{
            A:"liver",
            B:"throid gland",
            c:"pancreas",
            d:"none of above"
        },
        correctAns : "pancreas"
    },
    {
        question:"who is the father of C language ?",
        answers :{
            A:"Bjarne stroustrup",
            B:"James A.gosling",
            c:"Dennis ritchie",
            d:"Dr.e.f coodd"
        },
        correctAns : "Dennis ritchie"
    },
    {
        question:"How many keywords's in C",
        answers :{
            A:"0",
            B:"32",
            c:"48",
            d:"255"
        },
        correctAns : "32"
    },
    {
        question:"",
        answers :{
            A:"",
            B:"",
            c:"",
            d:""
        },
        correctAns : ""
    },
    {
        question:"",
        answers :{
            A:"",
            B:"",
            c:"",
            d:""
        },
        correctAns : ""
    },
    {
        question:"",
        answers :{
            A:"",
            B:"",
            c:"",
            d:""
        },
        correctAns : ""
    },
    {
        question:"",
        answers :{
            A:"",
            B:"",
            c:"",
            d:""
        },
        correctAns : ""
    },
    {
        question:"",
        answers :{
            A:"",
            B:"",
            c:"",
            d:""
        },
        correctAns : ""
    },
    {
        question:"",
        answers :{
            A:"",
            B:"",
            c:"",
            d:""
        },
        correctAns : ""
    },
    {
        question:"",
        answers :{
            A:"",
            B:"",
            c:"",
            d:""
        },
        correctAns : ""
    },
    {
        question:"",
        answers :{
            A:"",
            B:"",
            c:"",
            d:""
        },
        correctAns : ""
    },
    {
        question:"",
        answers :{
            A:"",
            B:"",
            c:"",
            d:""
        },
        correctAns : ""
    },
    {
        question:"",
        answers :{
            A:"",
            B:"",
            c:"",
            d:""
        },
        correctAns : ""
    },
    {
        question:"",
        answers :{
            A:"",
            B:"",
            c:"",
            d:""
        },
        correctAns : ""
    },
]

// if i want to add 20 question ...the condition of chooseQuestion 
// must changed ....carefull with the numbers
export let questionNumbers = 0
export function chooseQuestion(){
    // choose a Rando question
    if(questionNumbers <= 9){
        let choosenQ = q[Math.floor(Math.random() * q.length)]
        // console.log(choosenQ)

        //remove the choosen question from q ... so not show agian
        q.splice(q.indexOf(choosenQ),1)
        // console.log("you see now",q.length+1 , q.length , "number of questions left")
        let correctAns = choosenQ.correctAns
        let Arranswers = [choosenQ.answers.A,choosenQ.answers.B,choosenQ.answers.c,choosenQ.answers.d]
        shuffleArray(Arranswers)
        questionNumbers++
        // console.log("q length = " , q.length)
        return [choosenQ.question , Arranswers , correctAns]
    }
    // if the questions are done
    else{
        return false
    }
}
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }      
    return array
}