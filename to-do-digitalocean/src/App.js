import React, { useState } from 'react';
import './App.css';
import { Todo } from './components/Todo';

function App() {
  // The first parameter, todos, is what we are going to name our state.
  // The second parameter, setTodos, is what we are going to use to set the state.
  // eslint-disable-next-line
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for Lunch" },
    { text: "Build a cool todo app" }
  ]);
  //TODO: Render Todos here
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}


export default App;
