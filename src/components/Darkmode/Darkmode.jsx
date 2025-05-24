import { useState, useEffect} from "react";
import "./Darkmode.css";

function Darkmode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div>
      <h1>
          {isDarkMode ? '🌙 현재 다크모드입니다' : '☀️ 현재 라이트모드입니다'}
      </h1>
      
      <button onClick={handleToggle}>
        {isDarkMode ? '라이트모드로 전환' : '다크모드로 전환'}
      </button>

    </div>
  );
}
export default Darkmode;
