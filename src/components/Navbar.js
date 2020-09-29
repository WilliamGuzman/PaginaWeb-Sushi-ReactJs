import React, { useState } from "react";
import "./Navbar.css";
import './Button.css';
import Button from './Button';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <header className="hero-container">
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#!" className="navbar-logo">
            <i className="fas fa-fish"></i>SUSHI CUTE
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="#!" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-links" onClick={closeMobileMenu}>
                Product
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-links" onClick={closeMobileMenu}>
                Promo
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-links" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

      <div className="hero-items">
        <h1>Sushi Cute</h1>
        <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Vivamus lacinia odio vitae<br/> vestibulum vestibulum. </p>
        <Button 
          tittle="order now"
          bgColor="color1"
        />
      </div>
    </header>
  );
};

export default Navbar;
