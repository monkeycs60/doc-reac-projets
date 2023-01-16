import React, { useState, createContext } from "react";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    
    return (
        <TaskContext.Provider value={{ task, setTask, tasks, setTasks }}>
        {children}
        </TaskContext.Provider>
    );
    };

export default TaskContextProvider;