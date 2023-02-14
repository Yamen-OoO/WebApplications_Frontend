let imgs = document.querySelectorAll(".container .img-gallary .img-container")
let imgscon = document.querySelector(".container .img-gallary")

console.log(imgs)
let choosenarray = []
const all = document.querySelectorAll(".container .nav-buttons button")[0]
const pcbtn = document.querySelector(".container .nav-buttons button[data-filter='pc']")
const phonebtn = document.querySelector(".container .nav-buttons button[data-filter='phone']")
const ipadbtn = document.querySelector(".container .nav-buttons button[data-filter='ipad']")

let state = {
    sotrtby:"",
    choosenarray:[]
}


document.addEventListener("click",e=>{
    if(e.target.tagName === "button".toUpperCase() && e.target.getAttribute("data-filter") !== "All"){
        // e.target.className = "active"
        imgscon.innerHTML = ''
        choosenarray = []
        state.sotrtby = e.target.textContent
        // console.log(state)
        imgs.forEach(function(e){
            if(e.getAttribute("data-type") === state.sotrtby){
                choosenarray.push(e)
            }
        })
        // console.log(choosenarray)
        // console.log(imgs)
        imgscon.innerHTML = ''
        choosenarray.forEach(function(e){
            e.classList.add("animate__fadeInLeft")
            // document.imgscon.appendChild(e)
            imgscon.appendChild(e)
        })
    }
    else if(e.target.getAttribute("data-filter") === "All"){
        imgscon.innerHTML = ''
        choosenarray = []
        imgs.forEach(function(e){
            e.classList.add("animate__fadeInLeft")
            imgscon.appendChild(e)
        })
    }
})





// let array1 = [1,2,3,4,5]
// let array2 = []
// array2.push(array1[1])
// array2.push(array1[2])
// console.log(array1)
// console.log(array2)

// imgscon.innerHTML = ''