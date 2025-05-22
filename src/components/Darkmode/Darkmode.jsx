import React, { useState } from "react";

const Darkmode = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    setIsDark(!isDark);
  };

  const modeStyle = {
    backgroundColor: isDark ? "#333" : "#fff",
    color: isDark ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "2rem",
    transition: "0.3s",
  };

  return (
    <div style={modeStyle}>
      <h1>{isDark ? "다크 모드" : "라이트 모드"}</h1>
      <button onClick={toggleMode}>
        {isDark ? "라이트 모드로 변경" : "다크 모드로 변경"}
      </button>
      <hr style={{ margin: "1rem 0" }} />
      {children}
    </div>
  );
};

export default Darkmode;
