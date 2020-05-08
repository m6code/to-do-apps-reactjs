import React, { useContext, useState } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
    const {addTask, clearList} = useContext(TaskListContext);

    const [title, setTitle] = useState("");

    const handleChange = e => {
        setTitle(e.target.value);
        //console.log(title);
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTask(title);
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text"
                className="task-input"
                placeholder="Add A Task..."
                onChange={handleChange}
                value={title}
                required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">Add Task</button>
                <button onClick={clearList} className="btn clear-btn">Clear</button>
            </div>

        </form>
    )
}

export default TaskForm
