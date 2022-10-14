import React from "react";
import { Link } from "react-router-dom";
import "./navLinks.css";

function NavLinks() {
  return (
    <>
      <div className="links">
        <Link to="/home" className="home link">
          Home
        </Link>
        <Link to="/daily" className="daily link">
          Daily
        </Link>
        <Link to="/hourly" className="hourly link">
          Hourly
        </Link>
      </div>
    </>
  );
}

export default NavLinks;
