import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import DarkMod from "../DarkMod/DarkMod";

const NavBar = () => {

  return (
    <div>
      <nav className="navbar-div">
        <ul className="page-list">
          <li className="projects">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "activeRoute" : undefined
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="contact">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "activeRoute" : undefined
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="about">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "activeRoute" : undefined
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <DarkMod />
    </div>
  );
};

export default NavBar;
