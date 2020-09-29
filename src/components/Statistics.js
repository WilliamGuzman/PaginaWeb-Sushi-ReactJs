import React from "react";
import Counter from "./Counter";
import "./Statistics.css";

const Statistics = () => {
  return (
    <section className="statistics">
      <img src="/images/confeti2.png" className="confeti2-s" alt=""/>
      <img src="/images/confeti3.png" className="confeti3-s" alt=""/>
      <img src="/images/confeti6.png" className="confeti6-s" alt=""/>
      <img src="/images/confeti7.png" className="confeti7-s" alt=""/>
      <div className="statistics-container">
        <h1>Statistics</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Vivamus lacinia odio vitae vestibulum vestibulum.{" "}
        </p>
        <div className="statistics-container-counter">
          <Counter number="111" label="store" />

          <Counter number="222" label="menu" />

          <Counter number="333" label="chef" />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
