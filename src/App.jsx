import { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { TodoProvider } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev]);
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
  }

  const deleteTodo=()=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>
      prevTodo===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
    <div className='wrapper'>
      <div className="row">
        <h1 className='text-center'>Manage your Todos</h1>
        <div className="container d-flex align-items-center justify-content-center">
          {/* <div className="row"> */}
            <div className="col-md-6">
              <TodoForm/>
            {/* </div> */}
            <div className="col-md-12">
          {todos.map((todo)=>(
            <div className='w-100 mb-2' key={todo.id}>
                <TodoItem todo={todo}/>
            </div>
          ))}
        </div>
          </div>
        
        </div>
        
      </div>
      
    </div>
    </TodoProvider>
  )
}

export default App
