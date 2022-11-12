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
        question:"Which of the following function is user defined",
        answers :{
            A:"printf",
            B:"scanf",
            c:"main",
            d:"none"
        },
        correctAns : "main"
    },
    {
        question:"In C,we uesd for input/output?",
        answers :{
            A:"cin & cout",
            B:"input & output",
            c:"scanf & printf",
            d:"none"
        },
        correctAns : "scanf & printf"
    },
    {
        question:"What is the range of int data type",
        answers :{
            A:"0 to 255",
            B:"-127 to +127",
            c:"-32768 to + 32768",
            d:"none"
        },
        correctAns : "-32768 to + 32768"
    },
    {
        question:"In which year , C language was Developed",
        answers :{
            A:"1979",
            B:"1972",
            c:"1991",
            d:"2002"
        },
        correctAns : "1972"
    },
    {
        question:"Which type of Language is C",
        answers :{
            A:"Procedural oriented programming",
            B:"object oriented programming",
            c:"semi-object oriented porgramming",
            d:"none"
        },
        correctAns : "Procedural oriented programming"
    },
    {
        question:"The format identifier '%c' is used for which datatype ",
        answers :{
            A:"int",
            B:"double",
            c:"char",
            d:"float"
        },
        correctAns : "char"
    },
    {
        question:"sizeof() is a __",
        answers :{
            A:"function",
            B:"variable",
            c:"object",
            d:"operator"
        },
        correctAns : "operator"
    },
    {
        question:"Breack statement is used for __",
        answers :{
            A:"Quit a program",
            B:"Quit the current itration",
            c:"If condtion",
            d:"none"
        },
        correctAns : "Quit the current itration"
    },
    {
        question:"Which of the following is a logical NOT operator",
        answers :{
            A:"$$",
            B:"&&",
            c:"!",
            d:"||"
        },
        correctAns : "!"
    },
    {
        question:"What is the default value of static variable ?",
        answers :{
            A:"0",
            B:"null",
            c:"garbage",
            d:"none"
        },
        correctAns : "0"
    },
    {
        question:"Prototype of a function means __",
        answers :{
            A:"Name of a function",
            B:"Parameter of a function",
            c:"Declartion of a function",
            d:"All"
        },
        correctAns : "All"
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