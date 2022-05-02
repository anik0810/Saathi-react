import "./Components/CSS/login.css";
import React, { useState } from "react";
import NavBar from './Components/Navbar';
import LoginForm from "./Components/LoginForm";
import Home from "./Components/Home";
import Tool from "./Components/Tool";
import Guide from "./Components/Guide";
export default function App() {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    <>
      <NavBar handleLoginClick={handleLoginClick} />
      <LoginForm isShowLogin={isShowLogin} />
      <Home/>
      <Tool/>
      <Guide/>
    </>
  );
}
