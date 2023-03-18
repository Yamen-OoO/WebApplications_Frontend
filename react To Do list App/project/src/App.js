import { useEffect, useState } from 'react';
import './App.css';
import Form from './componets/Form';
import TodoList from './componets/TodoList';

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(()=>{
    getTodos()
  },[])

  useEffect(() => {
    filterHandler()
    saveTodos()
  }, [todos, status])




  // we run it when i hit submit or ... when i use the filter
  //using the useEffect()
  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  //save to local storge
  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  //get todos from local
  //this runs when start the app... before anything else
  const getTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos" , JSON.stringify([]))
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }
  // console.log(filteredTodos)


  return (
    <>
      <header>
        <h1>To do List App</h1>
      </header>
      <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </>
  );
}

export default App;
