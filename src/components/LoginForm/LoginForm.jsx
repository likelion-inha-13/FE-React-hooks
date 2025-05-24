import React, { useEffect, useRef, useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ validUser }) => {
  const [userid, setUserid] = useState("");
  const [userpw, setUserpw] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const handleLogin = () => {
    if (userid === validUser.id && userpw === validUser.pw) {
      setMessage("로그인 되었습니다.");
    } else {
      setMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div>
      <input
        placeholder="아이디를 입력하세요"
        value={userid}
        onChange={(e) => setUserid(e.target.value)}
      />
      <input
        ref={inputRef}
        placeholder="비밀번호를 입력하세요"
        type="password"
        value={userpw}
        onChange={(e) => setUserpw(e.target.value)}
      />
      <button className="button" onClick={handleLogin}>
        로그인
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginForm;

