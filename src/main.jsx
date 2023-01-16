import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import DarkContextProvider from "./components/Contexts/DarkContextProvider";
import TaskContextProvider from "./components/Contexts/TaskContext";

const queryClient = new QueryClient({});

const Root = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <DarkContextProvider>
          <TaskContextProvider>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </TaskContextProvider>
        </DarkContextProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
