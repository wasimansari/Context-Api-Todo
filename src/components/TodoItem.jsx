import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({todo}) {
    const [isTodoEditable,setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg]= useState(todo.todo)
    const {updateTodo,deleteTodo,toggleComplete} = useTodo();

    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompletedAction=()=>{
        toggleComplete(todo.id)
        console.log(todo.completed)
    }
  return (
    <div>
        {/* <div className="row mb-2 mt-2"> */}
            <div className={`col-md-12 pt-2 pb-2 justify-content-center text-white rounded-3
                ${todo.completed ? "bg-danger":"bg-success"}`}>
                    <div className="row">
                    <div className="col-md-6">
                <div className="form-check ms-3">
                    <input className="form-check-input position-static mt-2" type="checkbox" 
                        id="blankCheckbox" value="option1" aria-label="..."
                        checked={todo.completed} 
                        onChange={toggleCompletedAction} />
                    <input type="text" className={`form-control 
                        ${isTodoEditable ? "border border-secondary":"border border-secondary text-white border-0 bg-success"}
                        ${todo.completed?"text-decoration-line-through":""}`}
                        value={todoMsg} 
                        onChange={(e) => setTodoMsg(e.target.value)} 
                        placeholder='todos...' 
                        readOnly={!isTodoEditable} 
                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end pe-4">
                {/* <label htmlFor="">Todo List Item</label> */}
                <button className='btn btn-primary me-2'
                    onClick={()=>{
                        if(todo.completed) return;
                        if(isTodoEditable){
                            editTodo();
                        }else setIsTodoEditable((prev)=>!prev);
                    }}
                    disabled={todo.completed}
                    >
                    {isTodoEditable?"Save":"Edit"}
                </button>
                <button className='btn btn-danger'
                    onClick={()=>deleteTodo(todo.id)}
                    >
                    Delete
                </button>
            </div>
            {/* <div className="col-md-2">
                <a href="">
                    <i class="bi bi-pencil-fill"></i>
                </a>
            </div>
            <div className="col-md-2">
                <a href="">
                    <i class="bi bi-x-square"></i>
                </a>
            </div> */}
                    </div>
            
        </div>
        {/* </div> */}
    </div>
  )
}

export default TodoItem