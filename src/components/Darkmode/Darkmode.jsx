import { useState } from "react";
import "./Darkmode.css";

const Darkmode = () => {
  const [DarkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={DarkMode ? "dark-mode" : ""}>
      <h1>{DarkMode ? "다크모드" : "화이트모드"}</h1>
      <button onClick={handleToggle}>
        {DarkMode ? "화이트모드로 변경" : "다크모드로 변경"}
      </button>
    </div>
  );
};

export default Darkmode;
