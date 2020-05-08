import React, { createContext, useState } from 'react'

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {
            title: "Read a Book",
            id: Date.now()
        },
        {
            title: "Jump Ropes",
            id: Date.now() + 1,
        },
        {
            title: "Code Some React",
            id: Date.now() + 2
        }
    ]);

    const addTask = (title) => {
        setTasks([...tasks, {title: title, id: Date.now()}])
    }

    return (
        <TaskListContext.Provider value={{
            tasks,
            addTask
        }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;
