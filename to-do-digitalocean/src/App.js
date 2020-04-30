import React, { useState } from 'react';
import './App.css';
import './assets/css/materialize.min.css'
import { Todo } from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {

  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card horizontal center">
            <div className="card-stacked">
              <div className="card-content">
                <h3>ToDo App</h3>
                <p className="flow-text">A Simple Todo App Using React js from DigitalOcean tutorial</p>

              </div>
              <div className="card-action todo-list">
                {todos.map((todo, index) => (
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                  />
                ))}

                <TodoForm addTodo={addTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
