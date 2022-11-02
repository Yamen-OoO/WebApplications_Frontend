let task_number =0;
let task_numberShower = document.querySelector(".container .number_oftask span")
let task_container = document. querySelector(".task_container")
let task = document. querySelector(".task_container .task p")
let Add_btn = document.querySelector(".container button.add")
let remove_btn = document.querySelector(".container .task_container .task span ")
let clear_bnt = document.querySelector(".container .clear_all")
let input_task = document.querySelector(".container .task_add")


Add_btn.onclick = function(){
    if(input_task.value === ""){
        return 
    }
    addTask()
    input_task.value = ""
}
function addTask(){
    if(task_number <= task_container.attributes[1].value){
        let div = document.createElement("div")
        div.classList.add("task")

        let p = document.createElement("p")
        p.textContent = input_task.value
        p.className = "task_para"

        let span = document.createElement("span")
        span.className = "remove_btn"
        let garbage = document.createElement("i")
        garbage.className = "fa-solid fa-trash"

        span.appendChild(garbage)
        div.appendChild(p)
        div.appendChild(span)
        task_container.appendChild(div)
        task_number++
        task_numberShower.innerHTML = task_number
        localStorage.setItem(task_number , input_task.value)
    }
    else if(task_number >= task_container.attributes[1].value){
        alert("You can Not Add more than five tasks")
    }
}

document.addEventListener("click",function(e){
    if(e.target.className === "remove_btn"){
        e.target.parentElement.style.display = "none"
        task_number--
        task_numberShower.innerHTML = task_number
    }
})


clear_bnt.addEventListener("click",function(){
    if(task_number ===0){
        alert("No tasks to remove")
    }
    else{
        task_container.innerHTML = ""
        task_numberShower.innerHTML = 0
        task_number = 0
    }
})
document.addEventListener("click",function(e){
    if(e.target.className === "task_para"){
        let tasks = document.querySelectorAll(".container .task_container .task")

        // to reach all the tasks 
        tasks.forEach(ele =>{
            ele.onclick = function(){
                document.querySelector(".place_holder").style.display = "flex"
            }
        })
    }
})