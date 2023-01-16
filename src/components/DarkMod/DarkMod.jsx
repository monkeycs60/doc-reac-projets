import React, { useContext, useEffect } from "react";
import "./DarkMod.css";
import LightMoon from "../../assets/moon-solid.svg";
import { DarkModContext } from "../../main";
import DarkMoon from "../../assets/moon-regular.svg";
import "../../App.css";

const DarkMod = () => {
  const { darkMode, setDarkMode } = useContext(DarkModContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    darkMode
      ? (document.body.classList.add("darker"),
        document.getElementById("DarkButton").classList.add("button-bg"),
        document.getElementById("darkImage").src = LightMoon
        )
      : (document.body.classList.remove("darker"),
        document.getElementById("DarkButton").classList.remove("button-bg"),
        document.getElementById("darkImage").src = DarkMoon
        );
  }, [darkMode]);

  return (
    <button type="button" id="DarkButton" onClick={handleClick}>
      <img src={DarkMoon} alt="DarkMoon" id="darkImage" />
    </button>
  );
};

export default DarkMod;
