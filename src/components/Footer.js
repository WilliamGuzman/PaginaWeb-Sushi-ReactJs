import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <div className="footer-logo">
            <i className="fas fa-fish"></i>SUSHI CUTE
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            dignissim nunc, id maximus ex. Etiam nec dignissim elit, at
            dignissim enim.
          </p>
          <div className="social-icon">
              
            <span className="fa-stack">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-flag fa-stack-1x fa-inverse"></i>
            </span>

            <span className="fa-stack">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
            </span>
            <span className="fa-stack">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
            </span>
            <span className="fa-stack">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
            <span className="fa-stack">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
            </span>
          </div>
        </div>
        <div className="footer-item">
          <h1>About</h1>
          <a href="#!" className="footer-links">
            History
          </a>
          <a href="#!" className="footer-links">
            Our Team
          </a>
          <a href="#!" className="footer-links">
            Brand Guidelines
          </a>
          <a href="#!" className="footer-links">
            Terms & Condition
          </a>
          <a href="#!" className="footer-links">
            Privacy Policy
          </a>
        </div>
        <div className="footer-item">
          <h1>Services</h1>
          <a href="#!" className="footer-links">
            How to Order
          </a>
          <a href="#!" className="footer-links">
            Our Product
          </a>
          <a href="#!" className="footer-links">
            Order Status
          </a>
          <a href="#!" className="footer-links">
            Promo
          </a>
          <a href="#!" className="footer-links">
            Payment Method
          </a>
        </div>
        <div className="footer-item">
          <h1>Other</h1>
          <a href="#!" className="footer-links">
            Contact Us
          </a>
          <a href="#!" className="footer-links">
            Help
          </a>
          <a href="#!" className="footer-links">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
