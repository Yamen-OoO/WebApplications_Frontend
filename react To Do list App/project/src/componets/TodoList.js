import React from 'react'
import { useState } from 'react'
import Todo from './Todo'

function TodoList({ todos , setTodos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {todos.map((todo) =>                 
                <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} todoText={todo.text} />
                )}
            </ul>
        </div>
    )
}

export default TodoList