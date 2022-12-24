import React, { useState } from "react";
import "./ToDo.css";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

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
                className={
                  task.completed ? "completeClass" : "incompleteClass"
                }
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
