import React, { useContext } from 'react'

import Todo from './todo';
import { TodoContext } from '../TodoContext';

export default function TodoList() {
   
    const [todos, setTodos] = useContext(TodoContext);

    // toggle isDone
    const toggleDone = (todo) => {
        todos.map(_todo => _todo === todo ? _todo.isDone = !todo.isDone : todo );
        setTodos([...todos]);
    }

    // delete todo
    const deleteTodo = (todo) => {
        const _todos = todos.filter(_todo => _todo !== todo);
        setTodos(_todos);
    }

    return (
        <div>
            <div className="hero is-info">
                <div className="hero-body has-text-centered">
                    <p className="title is-1">{todos.length} Todos</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {todos.map(todo => (
                        <Todo key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo}/>
                    ))}
                </div>
            </section>
        </div>
    )
}