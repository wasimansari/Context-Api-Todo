import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
    const [todo, setTodo] = useState('')
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({ todo, completed: false })
        setTodo('')
    }
    return (
        <div className="col-md-12 mt-5">
            <form onSubmit={add}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control"
                        value={todo} 
                        onChange={(e) => setTodo(e.target.value)} 
                        placeholder='todos...' aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button type='submit' className='btn btn-success'>Add Todo</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TodoForm