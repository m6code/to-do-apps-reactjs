import React from 'react';
import Navbar from './components/navbar';
import TodoList from './components/todolist';
import { TodoProvider } from './TodoContext';

function App() {
  return (
    <TodoProvider>
      <Navbar/>
      <TodoList/>
    </TodoProvider>
  );
}

export default App;
