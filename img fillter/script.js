let imgs = document.querySelectorAll(".container .img-gallary .img-container")
let imgscon = document.querySelector(".container .img-gallary")

console.log(imgs)
let choosenarray = []
const all = document.querySelectorAll(".container .nav-buttons button")[0]
const pcbtn = document.querySelector(".container .nav-buttons button[data-filter='pc']")
const phonebtn = document.querySelector(".container .nav-buttons button[data-filter='phone']")
const ipadbtn = document.querySelector(".container .nav-buttons button[data-filter='ipad']")
console.log(all)
console.log(pcbtn)
console.log(phonebtn)
console.log(ipadbtn)

let state = {
    sotrtby:"",
    choosenarray:[]
}


all.onclick = function(){
    choosenarray = []
    imgs.forEach(element => {
        choosenarray.push(element)
    });
    imgs = choosenarray
}
pcbtn.onclick = function(){
    choosenarray = []
    imgs.forEach(element => {
        if(element.getAttribute("data-type")=== "phones"){
            choosenarray.push(element)
        }
    });
    // put the elements inside the container
    imgs = choosenarray
}


let array1 = [1,2,3,4,5]
let array2 = []
array2.push(array1[1])
array2.push(array1[2])
console.log(array1)
console.log(array2)

// imgscon.innerHTML = ''