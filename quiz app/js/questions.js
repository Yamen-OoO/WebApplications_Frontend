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
    }
]
export function chooseQuestion(){
    // choose a question
    if(q.length !==0){
        let choosenQ = q[Math.floor(Math.random() * q.length)]
        // console.log(choosenQ)
        //remove the choosen question from q ... so not show agian
        q.splice(q.indexOf(choosenQ),1)
        let correctAns = choosenQ.correctAns
        let Arranswers = [choosenQ.answers.A,choosenQ.answers.B,choosenQ.answers.c,choosenQ.answers.d]
        // console.log(q.length , "number of questions")
        return [choosenQ.question , Arranswers , correctAns]
    }
    else{
        return false
    }
}

