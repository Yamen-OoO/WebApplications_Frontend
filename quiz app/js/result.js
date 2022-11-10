// func LocalStorgeBackUsers() is used to display the content of the local stroge ...when you ask for the result

export function localStorgeBackUsers(){
    let arr = []
    for(let i=0; i<localStorage.length;i++){
        arr.push(JSON.parse(localStorage[i]))
    }
    sortArray(arr)
    MakeResultList(arr)
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
    // console.log(arr)
    return arr
}


// make the result container
let UsersRows = document.querySelector(".result-container .table .users-rows")
// console.log(UsersRows)

export function MakeResultList(arr){
    for(let i =0 ; i<arr.length; i++){
        let userRow = document.createElement("div")
        userRow.classList.add("row")
        userRow.classList.add("user-row")
        let rank = document.createElement("span")
        rank.classList.add("user-rank")
        let UserName = document.createElement("span")
        rank.classList.add("user-name")
        let result = document.createElement("span")
        rank.classList.add("user-result")
        rank.textContent = i+1
        UserName.textContent = arr[i].name
        result.textContent = arr[i].points
        userRow.appendChild(rank)
        userRow.appendChild(UserName)
        userRow.appendChild(result)
        UsersRows.appendChild(userRow)
    }
    document.querySelector(".result-container").style.display = "flex"
}

let closeBtn = document.querySelector(".result-container button")
closeBtn.addEventListener("click",function(){
    alert("try again")
    window.location = " "
})