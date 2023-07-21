let gameContaienr = document.querySelector(".game-container")
let cells = document.querySelectorAll(".game-container span")
let resultPlaceholder = document.querySelector(".result-placeholder")
let XPointsPlacholder = document.querySelector(".x-points")
let OPointsPlacholder = document.querySelector(".o-points")
let XTurn = true
let XArray = []
let OArray = []
let XOArray = []
let Xpoints = 0
let Opoints = 0
let clickAudio = new Audio()
let backgroundMusic = new Audio()
backgroundMusic.src = "/Background music 1 minute _D.mp3"
backgroundMusic.volume = 0.1
backgroundMusic.loop = true
backgroundMusic.play()


// ^ winings states
let Wininig = [
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [3,5,7],[1,5,9]
]






cells.forEach((cell , i)=>{
    cell.onclick = (e)=>{
        //^ play the music at the first click
        if(i===0){
            backgroundMusic.play()
        }
        clickaudio("/Menu Game Button Click Sound Effect.mp3")
        cell.classList.add("fullCell")
        putSign(e)
    }
})

function putSign(e){
    if(XTurn){
        // ^ X turn
        e.target.classList.add("redColor")
        XArray.push(+e.target.getAttribute('data-cell'))
        XOArray.push(+e.target.getAttribute("data-cell"))
        e.target.innerHTML = "X"
        XTurn = !XTurn
        checkWinner(XArray , "X")
    }
    else{
        // ^ O turn
        e.target.classList.add("blueColor")
        OArray.push(+e.target.getAttribute('data-cell'))
        XOArray.push(+e.target.getAttribute("data-cell"))
        e.target.innerHTML = "O"
        XTurn = !XTurn
        checkWinner(OArray , "O")
    }
}


function checkWinner(PlayerArray , sign){
    // ^ take the array of (X or O) and check all the wining arraies
    Wininig.forEach((winArray)=>{
        for(let i =0 ; i<=0; i++){
            // ^ for each winArray check if Xarray or Oarray has the 3 values
            if(PlayerArray.includes(winArray[i])&& PlayerArray.includes(winArray[i+1]) && PlayerArray.includes(winArray[i+2])){
                removeXOArray()
                if(sign === "X"){
                    Xpoints++
                    XPointsPlacholder.children[Xpoints - 1].style.backgroundColor ="red"
                }
                else{
                    Opoints++
                    OPointsPlacholder.children[Opoints - 1 ].style.backgroundColor ="blue"
                }
            }
        }
    })
    // ^ if player has 2 points end the game
    if(Xpoints === 2 || Opoints ===2){
        resultPlaceholder.style.display="block"
        resultPlaceholder.firstElementChild.textContent = `${sign} wins`
        resultPlaceholder.classList.add("fadeToRight")
        gameContaienr.style.pointerEvents = "none"
    }



    function removeXOArray(){
        // ^ clear the cells and the pleayers arraies
        let i =0
        gameContaienr.style.pointerEvents = "none"
        let remover = setInterval(()=>{
            // console.log(cells[XOArray[i]-1])
            // console.log(XOArray[i])
            // console.log(cells[XOArray[i]])
            cells[XOArray[i]-1].innerHTML = ""
            cells[XOArray[i]-1].classList.remove("fullCell")
            cells[XOArray[i]-1].classList.remove("redColor")
            cells[XOArray[i]-1].classList.remove("blueColor")
            if(i === XOArray.length-1){
                gameContaienr.style.pointerEvents = "auto"
                clearInterval(remover)
                XOArray.length = 0
                XArray.length = 0
                OArray.length = 0
                XTurn = true
            }
            i++
        },300)
    }
}



function clickaudio(url) {
    clickAudio.src = url
    clickAudio.play()
}