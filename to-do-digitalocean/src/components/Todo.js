import React from 'react'
import '../App.css'

function Todo({todo, index, completeTodo, removeTodo}) {
    return (
        <div
            className="todo"
            style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
        >
            {todo.text}

            <div>
                <button onClick={() => completeTodo(index)} className="btn-complete">Complete</button>
                <button onClick={() => removeTodo(index)} className="btn-delete"> x </button>
            </div>
        </div>
    );
}

export default Todo
