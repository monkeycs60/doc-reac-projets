import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar-div">
      <ul className="page-list">
        <li className="projects">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="contact">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="about">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
