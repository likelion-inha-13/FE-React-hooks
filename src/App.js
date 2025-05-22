import React from "react";
import LoginPage from "./page/LoginPage";
import Darkmode from "./components/Darkmode/Darkmode";

function App() {
  return (
    <Darkmode>
      <LoginPage />
    </Darkmode>
  );
}

export default App;
