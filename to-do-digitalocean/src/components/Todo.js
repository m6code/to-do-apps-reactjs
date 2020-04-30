import React from 'react'

export function Todo({ todo, index, completeTodo }) {
    return (
        <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : ""}} 
        >
            {todo.text}
            <div>
                <button className="btn" onClick={() => completeTodo(index)}>Complete</button>
            </div>
        </div>
    )
}