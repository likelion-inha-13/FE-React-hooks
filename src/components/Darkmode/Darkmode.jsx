import React, { useState } from "react";
import "./Darkmode.css"; 

const DarkMode = () => {
  const [itDark, setItDark] = useState(false); // 기본이 Dark니까 false=light모드

  const changeMode = () => {
    setItDark(!itDark); //!는 반대로 하라는 뜻, chagemode가 되면 바뀌게 됨됨
  };

  return (
    <div className={itDark ? "dark-mode" : ""}> 
      <h1>{itDark ? "다크 모드" : "라이트 모드"}</h1>
      <button onClick={changeMode}>
        {itDark ? "라이트 모드로 변경" : "다크 모드로 변경"}
      </button>
    </div>
  ); //조건 ? (참일 때 실행하는 거) : (거짓일 때 실행하는 거) 라고 줄여서 표현현
};

export default DarkMode;
