import React from 'react'
import { useState } from 'react'


export default function Form({inputText , todos , setInputText , setTodos}) {
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

    return (
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className='todo-input' />
            <button onClick={submitHandler} className='todo-button' type='submit'>
                <i className="fas fa-plus-square"></i>
            </button>

            <div className='select'>
                <select name='todos' className='filter-todo'>
                    <option value="all">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">UnCompleted</option>
                </select>
            </div>
        </form>
    )
}
