import React from 'react'

function Todo({todo, index, completeTodo}) {
    return (
        <div
            className="todo"
            style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
        >
            {todo.text}

            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
            </div>
        </div>
    );
}

export default Todo
