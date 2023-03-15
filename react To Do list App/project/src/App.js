import { useState } from 'react';
import './App.css';
import Form from './componets/Form';
import TodoList from './componets/TodoList';

function App() {
  const [inputText , setInputText] = useState("")
  const [todos , setTodos] = useState([])
  return (
    <>
      <header>
        <h1>To do List App</h1>
      </header>
      <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} />
      <TodoList />
    </>
  );
}

export default App;
