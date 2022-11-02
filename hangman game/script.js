let container = document.querySelector(".container")
let wordsRow = document.querySelector(".container .control .word-row")
let containerCatagory = document.querySelector(".container-catagory")
let CatagoryType = document.querySelector(".details .cata-type")
let treisNumber = document.querySelector(".details .tries-number")
let chossenCata
let index
let randomWord 
let splitedWord 
let word 
let splitedWord_lenght 
let start = false
let tries = 1
let arr =[]
let keysContainer = document.querySelector(".container .control .keyboard-container .keys")
let keys = document.querySelectorAll(".container .control .keyboard-container .keys .key")
let testImg = document.querySelector("img")
let showedLetter = 0;


let catagory = [
    programming  ={
        words : ["javascript" , "python" , "kotlin" , "dart"] 
    } ,
    social_media = {
        words : ["facebook" , "twitter" , "instagram" , "youtube" , "viber"]
    },
    sports = {
        words :["football" , "basketball" , "vollyball" , "tennis" , "soccer"]
    },
    countries = {
        words: ["syria" , "japan", "lebanon", "iraq"]
    },
    animals = {
        words: ["fish" , "monkey" , "horse" , "pig" , "hawk"]
    },
    fruits = {
        words : ["bannana" , "orange" , "mango" , "apples" , "blueberries" , "pineapple" , "strawberries" , "durian" , "cherris", "watermelon" , "kiwi"]
    }
]

let CorrectAudio = new Audio("/Correct answer sound effect _ No copyright.mp3")
let windAudio = new Audio("/win.mp3")
let wrongAudio = new Audio("/Incorrect sound effect.mp3")
let DyingAudio = new Audio("/Scream Of Dying Man Sound Effect HD No Copyright.mp3")
CorrectAudio.volume = 0.4
wrongAudio.volume = 0.4
DyingAudio.volume = 0.4
windAudio.volume = 0.4


document.addEventListener("click" , function(e){
    if(e.target.className ==="cata"){
        //get the index of the catagory from html data-cata
        index = Number(e.target.getAttribute("data-cata")) 

        // show the catagory type in detail
        CatagoryType.textContent = e.target.textContent

        // choosing a catagory array
        chossenCata = catagory[+index].words

        // taking a random word from the choosen cata
        randomWord = Math.floor(Math.random() * chossenCata.length )

        // make an array from the word you choose
        splitedWord = catagory[+index].words[randomWord].split("")


        console.log(splitedWord)
        // to use in losing state
        word = splitedWord.join("")

        // take the length of the word ... to make the spans 
        splitedWord_lenght = splitedWord.length

        // remove the catagory list
        containerCatagory.style.display = "none"

        // make the spans ..with the letters
        creatSpans()

        // it must start with 0
        treisNumber.textContent = tries - 1

        //start the game
        start = true
    }
})
// creating the word spans
function creatSpans(){
    for(let i =0 ; i<splitedWord_lenght ; i++){
        let span = document.createElement("span")
        let letter = document.createElement("p")    
        letter.classList.add("letter")
        letter.setAttribute("data-letter" , splitedWord[i])
        letter.textContent = splitedWord[i]
        span.appendChild(letter)
        wordsRow.appendChild(span)   
    }
}


keys.forEach(function(e){
    e.onclick = function(ele){
        if(start === true && tries !== 6){

            //userletter ...is the latter user clicked
            let userLetter = ele.target.textContent.toLowerCase()

            // if there is one letter the same with the splited word...return true
            let check0 = splitedWord.some(letter =>{
                return letter === userLetter
            })

            // if check0 returend true
            if(check0){

                //this returns arr with indexs of the letter the user clicked
                check(userLetter)

                // show the letters using the arr content
                putLetters()
                ele.target.style.opacity = "0.3"
                ele.target.style.cursor = "auto"
                ele.target.className = "notkey"
                CorrectAudio.play()
            }
            else{
                wrongAudio.play()
                tries++
                treisNumber.textContent = tries - 1
                updateImge()
                ele.target.style.opacity = "0.3"
                ele.target.style.cursor = "none"
                ele.target.className = "notkey"
            }
        }
        else{
            DyingAudio.play()
            tries++
            treisNumber.textContent = tries - 1
            updateImge()
            setTimeout(function(){
                alert(`You Lost .... The answer is ${word}`)
                window.location = ""
            },100)
        }
        keysContainer.style.pointerEvents = "none"
        setTimeout(() => {
            keysContainer.style.pointerEvents = "auto"
        }, 1500);
    }
})



function check(letter){
    // the same if there is a letter equal to any letter
    //from the splited word...we take all indexs of the letter..
    //and then push it to arr
    //then u put " " instead of the letter in splitedword...
    //to make sure not seeing this letter again
    splitedWord.map((ele) =>{
        if(ele === letter){
            arr.push(splitedWord.indexOf(ele))
            splitedWord[splitedWord.indexOf(ele)] = " "
        }
    })
    return arr
}
function putLetters(){
    for(let i =0 ; i<arr.length; i++){
        // first child the P.letter
        wordsRow.children[arr[i]].firstChild.style.display = "block"
        showedLetter++
        if(showedLetter === splitedWord_lenght){
            windAudio.play()
            setTimeout(function(){
                alert("You won the game")
                window.location = ""
            },100)
        }
    }
    arr =[]
}
function updateImge(){
    //chaing the pic ...when you get wrong answer
    testImg.src = `/imgs/${tries}.png`
}
