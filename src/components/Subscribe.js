import React from "react";
import Button from "./Button";
import './Subscribe.css';

const Subscribe = () => {
  return (
    <section className="subscribe">
      <img src="/images/confeti7.png" className="confeti7-subs" alt=""/>
      <img src="/images/confeti9.png" className="confeti8-subs" alt=""/>
      <div className="subscribe-container">
          <h1>Your Sushi Here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
          <form className="form-subscribe">
              <input type="email" className="email-input" placeholder="Your Email"/>
              <Button 
                tittle="subscribe"
                bgColor="color3"
              />
          </form>
      </div>
    </section>
  );
};

export default Subscribe;
