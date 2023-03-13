import React from 'react'
import { useState } from 'react'


export default function TodoForm(props) {
    const handlesubmit = e =>{
        e.preventDefault()
        
        props.onSubmit({
            id: Math.floor(Math.random() * 1000) ,
            text : input
        });
        setInput("")
    }


    const handleChange = e =>{
        setInput(e.target.value)
        
    }
    const [input, setInput] = useState('')

    return (
        <form className='todo-form' onSubmit={handlesubmit}>
            <input type="text" placeholder='Add a todo' className="todo-input" name='text' value={input} onChange={handleChange} />
            <button className='todo-button'>Add</button>
        </form>
    )
}
