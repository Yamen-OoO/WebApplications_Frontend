import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos , settodos] = useState([])
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo , ...todos]
        settodos(newTodos)
        console.log(todos)
    }
    return (
        <div>
            <h1>Whta's the Plan for Today</h1>
            <TodoForm onSubmit = {addTodo} />

        </div>
    )
}

export default TodoList