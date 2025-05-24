import React, { useEffect, useRef, useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ validUser }) => {
  const [userid, setUserid] = useState("");
  const [userpw, setUserpw] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const handleLogin = () => {
    if (validUser.id === userid && validUser.pw === userpw) {
      setMessage("로그인 되었습니다!");}
    else {setMessage("아이디와 비밀번호를 다시 확인해주세요!");}
    };
  
  useEffect(() => {
    console.log("입력된 id가 변경되었습니다.");
  }, [userid]);

  useEffect(() => {
    console.log("입력된 pw가 변경되었습니다.");
  }, [userpw]);


  const handleid = (e) => {
    setUserid(e.target.value);
  };

  const handlepw = (e) => {
    setUserpw(e.target.value);
  };


  return (
    <div>
      <input value={userid} onChange={handleid} placeholder="아이디 입력"/>
      <input value={userpw} onChange={handlepw} placeholder="비밀번호 입력" type="password"/>
      <button className="button" onClick={handleLogin}>로그인</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginForm;
