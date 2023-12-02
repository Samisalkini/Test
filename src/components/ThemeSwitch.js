import React, { useState } from "react";
import "./ThemeSwitch.css";

const ThemeSwitch = ({ onThemeChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    onThemeChange(!isDarkMode ? "dark" : "light");
  };

  return (
    <div
      className={`theme-switch ${isDarkMode ? "dark" : "light"}`}
      onClick={toggleTheme}
    >
      <div className="slider"></div>
    </div>
  );
};

export default ThemeSwitch;
