import React, { useEffect, useRef, useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ validUser }) => {
  const [userid, setUserid] = useState("");
  const [userpw, setUserpw] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    if (userid === validUser.id && userpw === validUser.pw) {
      setMessage("로그인 되었습니다!");
    } else {
      setMessage("아이디와 비밀번호를 다시 확인해주세요!");
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (message === "아이디와 비밀번호를 다시 확인해주세요!") {
      setUserid("");
      setUserpw("");
    }
  }, [message]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="아이디"
        value={userid}
        onChange={(e) => setUserid(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={userpw}
        onChange={(e) => setUserpw(e.target.value)}       
      />
      <button className="button" onClick={handleChange}>로그인</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginForm;
