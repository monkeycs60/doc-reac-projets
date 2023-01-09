import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import ProjectsPage from "./pages/projectspage/ProjectsPage";
import ContactPage from "./pages/contactpage/ContactPage";
import AboutPage from "./pages/aboutpage/AboutPage";
import NavBar from "./components/Navbar/Navbar";
import IconHome from "./components/IconHome/IconHome";
import { QueryClient, QueryClientProvider } from "react-query";

export const TaskContext = React.createContext();
const queryClient = new QueryClient({});

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <BrowserRouter>
      <React.Fragment>
        <TaskContext.Provider value={{ task, setTask, tasks, setTasks }}>
          <QueryClientProvider client={queryClient}>
            <NavBar />
            <IconHome />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </QueryClientProvider>
        </TaskContext.Provider>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
