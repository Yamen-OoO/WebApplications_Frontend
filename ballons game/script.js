import Levels from "./levels.js"
let ChoosenLevel
import { ballons } from "./ballons.js"
let rail = document.querySelector(".rail")
let box = document.querySelector("img.box")
let BallonPop = new Audio()
let Ballonbomp = new Audio()
let BackgroundMusic = new Audio()
BackgroundMusic.loop = true
let ballonsArea = document.querySelector(".ballons-area")
let lifeSection = document.querySelector(".controll-board .lifes-section")
let score = document.querySelector(".score-section .points-number")
let result = document.querySelector(".result")


// ^ array length is equal the boxmMovmentNumber
let RailPointsCoorXArray = []
// ^ array length equals the boxmMovmentNumber , containes different ballons types
let ballonsArray = []
// ^ boxspeed , boxMovmentNumber
let boxSettings = {}



// ^ Levels buttons on Click
let LevelsButtons = document.querySelectorAll('.level-container h4')
LevelsButtons.forEach((button) => {
    button.onclick = () =>
        startGame(button.textContent)
})


//^ start the game and generate the game settings
function startGame(level) {

    //^ take the right settings from the imported files
    ChoosenLevel = Levels[level.toLowerCase()]

    //^ to make the coutnter ...when counter finshies the box start moving and push ballons
    startCount()

    //^ 
    MakeGameSettings()
}

function MakeGameSettings() {
    // ^ specifiy the box settings
    boxSettings = {
        BoxMovmentNumber: ChoosenLevel.BoxMovmentNumber,
        BoxMovmentSpeed: ChoosenLevel.BoxMovmentSpeed
    }

    // ^ change the body background
    document.body.style.backgroundImage = `url(${ChoosenLevel.BackgroundImg})`

    // ^ generate the rail points array on the rail
    GenerateRailPoints()

    //^ generate lifes section
    GenerateLifes()

    // ^ generate the ballons Aray
    GentrateBallonsArray()
}





// ^ this function runs once the count timer (async) is done ... so the setting are
// ^ ready too
function startBoxMovments() {
    backgroundmusic(ChoosenLevel.MusicUrl)
    let RailPointsCoorXArrayIndex = 0
    let speed = boxSettings.BoxMovmentSpeed
    let moveBoxStep = setInterval(() => {
        // ^ stop boxmoving and ballons pushing
        if (RailPointsCoorXArrayIndex === boxSettings.BoxMovmentNumber - 1) {
            clearInterval(moveBoxStep)
            // ^ end game with result (win) placholder after 4 seconds
            setTimeout(() => {
                result.style.display = "flex"
                result.firstElementChild.textContent = "You Win"
                let celebrateAudio = new Audio
                celebrateAudio.src = "/sounds/Celebration.mp3"
                celebrateAudio.loop= false
                celebrateAudio.play()
                BackgroundMusic.pause()
            },4000)
        }

        // ^ if not done move the box to the random target point and push ballon at the same time
        let targetPoint = RailPointsCoorXArray[Math.floor(Math.random() * RailPointsCoorXArray.length)]
        box.style.left = targetPoint - 60 + "px"
        setTimeout(() => {
            PushBallon(targetPoint)
        }, speed)
        RailPointsCoorXArrayIndex++
    }, speed)


    function PushBallon(targetPoint) {

        function makeballonElement(targetPoint) {
            // ^ make componet > img + point
            let Component = document.createElement('div')
            Component.classList = "component"
            Component.classList.add("ballon-gotop")
            Component.style.left = targetPoint - 60 + "px"
            
            // ^ make img ballon
            let ballon = ballonsArray[Math.floor(Math.random() * boxSettings.BoxMovmentNumber)]
            let img = document.createElement("div")
            img.className = "ballonimg"
            img.style.backgroundImage = `url(${ballon.img})`


            // ^ make the point
            let point = document.createElement("p")
            point.className = "point"
            point.textContent = ballon.point
            point.style.color = ballon.pointColor

            Component.appendChild(img)
            Component.appendChild(point)

            Component.onclick = () => {
                // ^ so can not click again
                Component.style.pointerEvents = "none"
                if (ballon.point === "-3") {
                    removeHeart()
                    changeScore("-3")
                    ballonbomp("/sounds/bomb.mp3")
                }
                else {
                    ballonPop("/sounds/Balloon Pop Sound effect(MP3_160K).mp3")
                    changeScore(ballon.point)
                }
                img.style.display = "none"
                point.style.display = "block"
                // ^ to add the animation of the text
                point.classList.add("show")
            }

            // ^ when the ballon goes to top remove from the nodes
            Component.addEventListener('animationend', () => {
                Component.remove()
            });
            ballonsArea.appendChild(Component)

        }
        makeballonElement(targetPoint)
    }
}






function GenerateRailPoints() {
    // ^ make rail points and append them
    for (let i = 0; i <= ChoosenLevel.railPoints - 1; i++) {
        let point = document.createElement("div")
        point.className = 'rail-point'
        rail.appendChild(point)
    }
    //^ set the data-coors attribute to the rail points elements with the left value then put them in the RailPointsCoorXArray
    function SpecifyPointsCoorX() {
        let railPoints = document.querySelectorAll(".game-container .rail .rail-point")
        railPoints.forEach((railpoint) => {
            railpoint.setAttribute("data-Coorx", railpoint.getClientRects()[0].left)
            RailPointsCoorXArray.push(railpoint.getClientRects()[0].left)
        })
    }
    SpecifyPointsCoorX()
}


function GentrateBallonsArray() {
    for (let i = 0; i <= boxSettings.BoxMovmentNumber - 1; i++) {
        // ^ push random ballon from the ballons file to ballonArray
        ballonsArray.push(ballons[Object.keys(ballons)[Math.floor(Math.random() * 6)]])
    }
}


function GenerateLifes(){
    for(let i =1 ; i<= ChoosenLevel.lifesNumber ; i++){
        let lifeIMg = document.createElement("img")
        lifeIMg.className = "heart"
        lifeIMg.src = "/imgs/heart.png"
        lifeSection.appendChild(lifeIMg)
    }
}


// ^ after the counter is done run startBoxMovments() 
function startCount() {
    let gameLevelscontainer = document.querySelector(".level-container .game-levels")
    gameLevelscontainer.style.display = 'none'
    let count = document.querySelector("h4.count")
    count.style.display = 'block'
    let timer = setInterval(() => {
        count.textContent--
        if (count.textContent === "0") {
            clearInterval(timer)
            gameLevelscontainer.parentElement.style.display = 'none'
            startBoxMovments()
        }
    }, 1000)
}



function removeHeart(){
    lifeSection.lastChild.remove()
    // ^ if heart = 0 end the game with losing result
    if(lifeSection.childElementCount === 0){
        result.style.display = "flex"
        result.firstElementChild.textContent = "You Lost"        
        setInterval(()=>{
            location.reload()
        },2000)
    }
}

function  changeScore(newPoint){
    if(newPoint === "-3"){
        if(parseInt(score.textContent) - 3 <= 0 ){
            score.textContent = "0"
        }
        else{
            score.textContent= parseInt(score.textContent) - 3
        }
    }
    else{
        score.textContent= parseInt(score.textContent) + parseInt(newPoint)
        if(parseInt(score.textContent) > 50 || parseInt(score.textContent) >100){
            score.style.color="gold"
        }
    }
}


function ballonPop(url) {
    BallonPop.src = url
    BallonPop.play()
}
function ballonbomp(url) {
    Ballonbomp.src = url
    Ballonbomp.play()
}
function backgroundmusic(url) {
    BackgroundMusic.src = url
    BackgroundMusic.play()
}




// ~ add the day night layer to make night and day ... denpending on the timer
// ~ sperate the css code and js code into files
