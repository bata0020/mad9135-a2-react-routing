import React from "react";
import logo from "../../logo.svg";
import "./header.css";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>React Weather App</p>
    </header>
  );
}

export default Header;
