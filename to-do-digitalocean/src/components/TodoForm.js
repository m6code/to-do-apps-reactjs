import React, { useState } from 'react'

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const handleSubmit = event => {
        event.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <input
                text='text'
                className='input'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
  }


export default TodoForm;