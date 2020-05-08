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

    const [editItem, setEditItem] = useState(null);

    const addTask = (title) => {
        setTasks([...tasks, {title: title, id: Date.now()}])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));

    }

    const clearList = () =>{
        setTasks([]);
    }

    const findItem = id => {
        const item  = tasks.find( task => task.id === id);
        setEditItem(item);
    }

    const editTask = (title, id) => {
        const newTask = tasks.map(task =>  (task.id === id ? {title, id} : task));
        //console.log(newTask);

        setTasks(newTask);
        setEditItem(null)
    }


    return (
        <TaskListContext.Provider value={{
            tasks,
            addTask,
            removeTask,
            clearList,
            findItem,
            editTask,
            editItem
        }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;
