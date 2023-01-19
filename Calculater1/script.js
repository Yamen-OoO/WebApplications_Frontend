//when we make our calculator we make sure to clear all the operands
class Calculator{
    constructor(previousElementText,currentElementText){
        this.previousElementText = previousElementText
        this.currentElementText = currentElementText
        // these tow values are to be shown
        this.currentOperand = ''
        this.previousOperand =''
        // these tow values are to used for our operations and save the data (not seen)
    }
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute(){
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current) ) return
        switch (this.operation){
            case "+":
                computation = prev + current
                break;
            case "-":
                computation = prev - current
                break;
            case "*":
                computation = prev * current
                break;
            case "÷":
                computation = prev / current
                break;
            default : return
        }
        this.currentOperand = computation
        this.previousOperand = ''
        this.operation = undefined
        
    }
    getDisplayNUmber(number){
        // add (,) between the numbers
        const floatNumber = parseFloat(number)
        if(isNaN(floatNumber)) return ''
        return floatNumber.toLocaleString("en")
    }
    updateDisplay(){
        this.currentElementText.innerText = this.getDisplayNUmber(this.currentOperand)
        if(this.operation != null){
            this.previousElementText.innerText = `${this.getDisplayNUmber(this.previousOperand)} ${this.operation}`
        }
    }
}


const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalButton = document.querySelector("[data-equal]")
const deleteButton = document.querySelector("[data-delete]")
const clearallButton = document.querySelector("[data-all-clear]")
const previousElementText = document.querySelector("[data-previous-opernad]")
const currentElementText = document.querySelector("[data-current-opernad]")

const calculator =  new Calculator(previousElementText,currentElementText)

clearallButton.addEventListener("click",()=>{
    calculator.clear()
    calculator.updateDisplay()
})
numberButtons.forEach(button =>{
    button.addEventListener("click",()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button =>{
    button.addEventListener("click",()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
equalButton.addEventListener('click',()=>{
    calculator.compute()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click',()=>{
    calculator.delete()
    calculator.updateDisplay()
})



// our app has tow main phases:
// 1) do the function (appendNumber , clear , compute , choosetheoperation)
// 2) update the display