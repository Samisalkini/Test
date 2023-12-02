import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <main>
        <ThemeSwitch onThemeChange={handleThemeChange} />
        <Sidebar />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
