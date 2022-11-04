// export {arr} 
// export {sayhello}

// let arr = [1,2,3,4]
// function sayhello(){
//     console.log("hello world")
// }
export {q}

let q = [
    {
        question:"what is your name",
        answers :{
            A:"yamen",
            B:"majd",
            c:"yasser",
            d:"yassin"
        },
        correctAns : "A"
    },
    {
        question:"How old are You",
        answers :{
            A:"22",
            B:"25",
            c:"44",
            d:"35"
        },
        correctAns : "B"
    },
    {
        question:"Where are you from",
        answers :{
            A:"syria",
            B:"lebanon",
            c:"turkey",
            d:"iraq"
        },
        correctAns : "c"
    }
]

export function chooseQuestion(){

    // choose a question
    let choosenQ = q[Math.floor(Math.random() * q.length)]

    //remow the choosen question from q
    q.splice(q.indexOf(choosenQ),1)

    let Arranswers = [choosenQ.answers.A,choosenQ.answers.B,choosenQ.answers.c,choosenQ.answers.d]
    return [choosenQ.question , Arranswers]
}

