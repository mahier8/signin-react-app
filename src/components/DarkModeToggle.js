import React from "react";
import useDarkMode from "use-dark-mode";
import "./darkmodetoggle.css";
import Toggle from "react-toggle";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
    </div>
  );
};

export default DarkModeToggle;
