import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import ProjectsPage from "./pages/projectspage/ProjectsPage";
import ContactPage from "./pages/contactpage/ContactPage";
import AboutPage from "./pages/aboutpage/AboutPage";
import NavBar from "./components/Navbar/Navbar";
import IconHome from "./components/IconHome/IconHome";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <IconHome />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
