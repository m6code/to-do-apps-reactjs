import React from 'react'

export function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : ""}} 
        >
            {todo.text}
            <div>
                <button className="btn" onClick={() => completeTodo(index)}>Complete</button>
                <button className="btn red darken-3" onClick={() => removeTodo(index)}>Delete</button>
            </div>
        </div>
    )
}