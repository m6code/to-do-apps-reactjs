import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header>
        <form id='to-do-form'>
          <input type='text' placeholder='Enter Text'/>
          <button type='submit'>Add Todo</button>
        </form>
      </header>
      </div>
    )
  }
}
