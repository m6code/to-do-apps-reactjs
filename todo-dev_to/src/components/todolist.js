import React from 'react'

import Todo from './todo';

export default function TodoList() {
    const todos = [
        {
            "id" : Date.now(),
            "value": "Buy milk",
            "isDone": false,
        },
        {
            "id" : Date.now()+1,
            "value": "Play with goge boye",
            "isDone": true,
        },
    ]


    return (
        <div>
            <div className="hero is-info">
                <div className="hero-body has-text-centered">
                    <p className="title is-1">Todos</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {todos.map(todo => (
                        <Todo key={todo.id} todo={todo}/>
                    ))}
                </div>
            </section>
        </div>
    )
}