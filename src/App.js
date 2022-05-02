import "./Components/CSS/login.css";
import React, { useState } from "react";
import NavBar from './Components/Navbar';
import LoginForm from "./Components/LoginForm";
import Home from "./Components/Home";
<<<<<<< HEAD
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const darkmode = () => {
    document.style.body.backgroundColor = 'black';
}
export default function App() {
    return ( <
        >
        <
        Navbar / >
        <
        Home / >
        <
        Footer / > { /* <Devolpers/> */ }

        <
        />
    )
}
=======
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
>>>>>>> 5e8bc5b2e7a1487fe9d8845e6229912e52ebc4e0
