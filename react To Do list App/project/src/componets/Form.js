import React from 'react'
import { useState } from 'react'


export default function Form({inputText , todos , setInputText , setTodos , setStatus}) {

    const inputTextHandler = (e) =>{
        setInputText(e.target.value)
    }
    const submitHandler = (e)=>{
        e.preventDefault()

        // if we had todos ... speread them ... and add a new one as an object
        setTodos([
            ...todos,
            {text:inputText , completed : false , id : Math.random() * 1000}
        ]
        )
        // set the textstate to ''
        setInputText("")
    }
    const statusHandler = (e)=>{
        setStatus(e.target.value)
    }

    return (
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className='todo-input' />
            <button onClick={submitHandler} className='todo-button' type='submit'>
                <i className="fas fa-plus-square"></i>
            </button>

            <div className='select'>
                <select onChange={statusHandler} name='todos' className='filter-todo'>
                    <option value="all">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">UnCompleted</option>
                </select>
            </div>
        </form>
    )
}


// let array = [1,2,3,4]
// console.log( [...array , 99])



// function test(...numbers){
//     console.log(numbers)
//     for( const num of numbers){
//         console.log(num)
//     }
// }
// test(1)
// test(1,2,3,5,777)
// test(1,6,7,8,9,3,6)




// let obj = {
//     name:'yamen',
//     age:22,
//     level:3
// }
// console.log({...obj ,name:"ahmed"})




// let array = [1,2,3,4,5]
// let filltered  = array.filter((e)=> e >=3)
// console.log(array)

// console.log(filltered)



