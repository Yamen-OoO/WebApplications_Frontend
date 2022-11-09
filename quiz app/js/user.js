// this fun is used to update the local stroge depending on user input
// and func 2 is used to display the content of the local stroge ...when you ask for the result


export function newUser(trueAns){
    let userName = document.querySelector(".intro-container .form input.input-name")
    let userMF = document.querySelector(".intro-container .form #gender ")
    let startButton = document.querySelector(".intro-container .form button")
    let name = userName.value
    let sex = userMF.value
    let user = {
        name:name,
        gender:sex
    }
    user.points = trueAns;
    localStorage.setItem(localStorage.length,JSON.stringify(user))
    userName.value = " "
    console.log(localStorage)
}




// when the game is done ..... you display the result of the game and the squence of playres in  order of points...