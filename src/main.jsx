import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query"; 

export const TaskContext = createContext();
export const DarkModContext = createContext();

const queryClient = new QueryClient({});

const Root = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  return (
  <React.StrictMode>
    <BrowserRouter>
      <DarkModContext.Provider value={{ darkMode, setDarkMode }}>
      <TaskContext.Provider value={{ task, setTask, tasks, setTasks }}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </TaskContext.Provider>
      </DarkModContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(<Root />);






