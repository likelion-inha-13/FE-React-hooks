import React, { useState } from "react";

const LoginPage = () => {
  const user = {
    id: "likeLion",
    pw: "1234",
  };

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (inputId === user.id && inputPw === user.pw) {
      setMessage("로그인 성공!");
    } else {
      setMessage("아이디 또는 비밀번호가 틀렸어요.");
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <input
        placeholder="아이디 입력"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      />
      <input
        placeholder="비밀번호 입력"
        type="password"
        value={inputPw}
        onChange={(e) => setInputPw(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
      <p>{message}</p>
    </div>
  );
};

export default LoginPage;