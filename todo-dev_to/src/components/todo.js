import React from 'react'

function Todo(props) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <p className={`title ${props.todo.isDone ? "has-text-grey-light" : ""}`}>{props.todo.value}</p>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item buttons">
                            <button className={`button has-text-weight-bold ${props.todo.isDone ? "is-warning" : "is-primary"}`}>{props.todo.isDone ? "Undo" : "Done"}</button>
                            <button className="button is-danger has-text-weight-bold">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
