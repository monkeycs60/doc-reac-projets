import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../Contexts/TaskContext.jsx";
import "./ToDo.css";

const ToDo = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("memoire")) || []
  );
  const { task, setTask } = useContext(TaskContext);

  // Load the saved tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem("memoire");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, [setTasks]);

  // Save the tasks to local storage whenever the tasks array changes
  useEffect(() => {
    localStorage.setItem("memoire", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      task: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={task} onChange={handleChange} />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.task}
              <button
                onClick={() => handleComplete(task.id)}
                className={task.completed ? "completeClass" : "incompleteClass"}
              >
                {task.completed ? "Complete" : "Incomplete"}
              </button>
              <button onClick={() => handleDelete(task.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
