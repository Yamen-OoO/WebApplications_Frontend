export {a}
let a = 'ah'

var text
var textBacked
export default function preparelines(){
    fetch('/lines.json')
    .then(response => response.text())
    .then(text1 => text = text1)

    setTimeout(function(){
        textBacked = JSON.parse(text)[0].simple["lines-withNumber"]
        localStorage.setItem("text", textBacked)
    },10)
    return localStorage.getItem("text")
}


// from json to localstroge to my page