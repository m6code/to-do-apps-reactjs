import React from 'react';
import './App.css';
import './assets/css/materialize.min.css'

function App() {
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
              <div className="card-action"><p  className="">Our Todo List should be rendered here</p> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
