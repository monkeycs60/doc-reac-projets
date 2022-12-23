import React from "react";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import "./IconHome.css";



const IconHome = () => {
  return (
    <NavLink to="/"
      className={({ isActive }) => (isActive ? "activeHome" : "notActiveHome")}
    >
      <HiHome />
    </NavLink>
  );
}

export default IconHome;
