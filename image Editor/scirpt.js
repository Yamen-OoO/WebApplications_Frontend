inputImg = document.querySelector("input[type='file']")
imgContainer = document.querySelector(".img-container")

inputImg.addEventListener("change" , (e)=>{
    console.log(e.target.value)
    imgContainer.style.backgroundImage = `url(${e.target.value})`;
    console.log(inputImg.files[0])
})
let reader = new FileReader()
console.log(reader);