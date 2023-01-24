import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import DarkContextProvider from "./Contexts/DarkContextProvider.jsx";
import TaskContextProvider from "./Contexts/TaskContext.jsx";
import { Provider } from "react-redux";
import store from "./redux.jsx"

const queryClient = new QueryClient({});


const Root = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
        <DarkContextProvider>
          <TaskContextProvider>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </TaskContextProvider>
        </DarkContextProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
