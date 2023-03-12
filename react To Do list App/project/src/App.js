import { useState } from 'react';
import './App.css';
import TodoForm from './componets/TodoForm';

function App() {
  function printName(){
    console.log(name)
    setname("ds")
    console.log(name)
  }
  const [name , setname ] = useState("")
  return (
    <div className="todo-app">
      {/* <TodoForm /> */}
      <input type="text" placeholder='enter your name' onChange={(e)=> console.log(e.target.value)} />
      <button onClick={printName}>enter</button>
      {name && window.localStorage.setItem("name",name)}
    </div>
  );
}

export default App;
