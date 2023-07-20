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

cells.forEach((cell)=>{
    cell.onclick = (e)=>{
        cell.classList.add("fullCell")
        putSign(e)
    }
})

function putSign(e){
    if(XTurn){
        e.target.classList.add("redColor")
        XArray.push(+e.target.getAttribute('data-cell'))
        XOArray.push(+e.target.getAttribute("data-cell"))
        e.target.innerHTML = "X"
        XTurn = !XTurn
        checkWinner(XArray , "X")
    }
    else{
        e.target.classList.add("blueColor")
        OArray.push(+e.target.getAttribute('data-cell'))
        XOArray.push(+e.target.getAttribute("data-cell"))
        e.target.innerHTML = "O"
        XTurn = !XTurn
        checkWinner(OArray , "O")
    }
}











function checkWinner(PlayArray , sign){
    Wininig.forEach((winArray)=>{
        for(let i =0 ; i<=0; i++){
            if(PlayArray.includes(winArray[i])&& PlayArray.includes(winArray[i+1]) && PlayArray.includes(winArray[i+2])){
                removeXOArray()
                if(sign === "X"){
                    Xpoints++
                    XPointsPlacholder.childNodes[Xpoints].style.backgroundColor ="red"
                    console.log(Xpoints)
                }
                else{
                    Opoints++
                    XPointsPlacholder.childNodes[Opoints].style.backgroundColor ="blue"
                    console.log(Opoints)
                }
            }
        }
    })
    if(Xpoints === 2 || Opoints ===2){
        resultPlaceholder.style.display="block"
        resultPlaceholder.firstElementChild.textContent = `${sign} wins`
        resultPlaceholder.classList.add("fadeToRight")
        gameContaienr.style.pointerEvents = "none"
        console.log('show result')
    }



    function removeXOArray(){
        let i =0
        let remover = setInterval(()=>{
            // console.log(cells[XOArray[i]-1])
            // console.log(XOArray[i])
            // console.log(cells[XOArray[i]])
            cells[XOArray[i]-1].innerHTML = ""
            cells[XOArray[i]-1].classList.remove("fullCell")
            cells[XOArray[i]-1].classList.remove("redColor")
            cells[XOArray[i]-1].classList.remove("blueColor")
            if(i === XOArray.length-1){
                clearInterval(remover)
                XOArray.length = 0
                XArray.length = 0
                OArray.length = 0
                XTurn = true
                console.log('clean XOARRAy' , XOArray)
            }
            i++
        },500)
    }
}



let Wininig = [
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [3,5,7],[1,5,9]
]
