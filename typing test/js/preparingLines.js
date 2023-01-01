export {a}
let a = 'ah'

var text
var textBacked
export default function preparelines(){
    fetch('/lines.json')
    .then(response => response.text())
    .then(text1 => text = text1)

    setTimeout(function(){
        // console.log(text)
        let textBacked = JSON.parse(text)[0].simple["lines-withNumber"]
        // console.log(textBacked)
        localStorage.setItem("text", textBacked)
    },100)
    return localStorage.getItem("text")
}