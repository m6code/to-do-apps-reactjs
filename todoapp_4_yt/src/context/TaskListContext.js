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

    return (
        <TaskListContext.Provider value={{tasks}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;
