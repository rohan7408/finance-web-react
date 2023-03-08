import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="header" id="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" sizes={10} />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: " #ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#hero">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#demo">Demo</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
