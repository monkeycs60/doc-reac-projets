import React, { useContext, useEffect } from "react";
import "./DarkMod.css";
import DarkMoon from "../../assets/moon-solid.svg";
import { DarkModContext } from "../../main";
import LightMoon from "../../assets/moon-regular.svg";
import "../../App.css"

const DarkMod = () => {
  const { darkMode, setDarkMode } = useContext(DarkModContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
};

useEffect(() => {
  darkMode
    ? 
        document.body.classList.add("darker")
    : 
        document.body.classList.remove("darker");
}, [darkMode]);

  return (
    <button type="button" id="DarkButton" onClick={handleClick}>
      <img src={DarkMoon} alt="DarkMoon" id="darkImage" />
    </button>
  );
};

export default DarkMod;
