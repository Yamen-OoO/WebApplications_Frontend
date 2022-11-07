// this fun is used to update the local stroge depending on user input
// and func 2 is used to display the content of the local stroge ...when you ask for the result


let arr = []
export function newUser(){
    let userName = document.querySelector(".intro-container .form input.input-name")
    let userMF = document.querySelector(".intro-container .form #gender ")
    let startButton = document.querySelector(".intro-container .form button")
    let name = userName.value
    let sex = userMF.value
    let user = {
        name:name,
        gender:sex
    }
    user.points = localStorage.length +20;
    localStorage.setItem(localStorage.length,JSON.stringify(user))
    userName.value = " "
    for(let i=0; i<localStorage.length;i++){
        arr.push(JSON.parse(localStorage[i]))
    }
    sortArray(arr)
}


// when show the result at the end of the game
function sortArray(arr){
    for(let i =0 ; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i].points >= arr[j].points){
                let box = arr[i]
                arr[i] = arr[j]
                arr[j] = box
            }
        }
        // console.log(arr[i].points)
    }
    console.log(arr)
}

// when the game is done ..... you display the result of the game and the squence of playres in  order of points...