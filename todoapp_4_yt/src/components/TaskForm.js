import React from 'react'

const TaskForm = () => {
    return (
        <form>
            <input type="text"
                className="task-input"
                placeholder="Add A Task..."
                required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">Add Task</button>
                <button className="btn clear-btn">Clear</button>
            </div>

        </form>
    )
}

export default TaskForm
