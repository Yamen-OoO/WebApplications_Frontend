import React from 'react'

function Todo({setTodos , todos , todo}) {

    const deleteHandler = () =>{
        console.log(todos)
        setTodos(todos.filter((e) => e.id !== todo.id))
        // console.log(todo.id)
    }

    const completeHandler = ()=>{
        setTodos(todos.map((element)=>{
            if(element.id === todo.id){
                // change completed of the todo object and return it
                return {
                    ...element , completed: !element.completed
                }
            }
            return element
        }))
    }
    return (
        <div className='todo'>
            <li className= {`todo-item ${todo.completed ? "completed" : ""}`} >{todo.text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default Todo