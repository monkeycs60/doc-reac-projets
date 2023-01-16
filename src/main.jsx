import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import DarkContext from "./components/Contexts/DarkContext";

export const TaskContext = createContext();
export const DarkModContext = createContext();

const queryClient = new QueryClient({});

const Root = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <React.StrictMode>
      <BrowserRouter>
        <DarkContext>
          <TaskContext.Provider value={{ task, setTask, tasks, setTasks }}>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </TaskContext.Provider>
        </DarkContext>
      </BrowserRouter>
    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
