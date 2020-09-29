import React, { useEffect } from "react";
import Button from "./Button";
import "./OrientalSushi.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OrientalSushi = () => {

  useEffect(() => {
    AOS.init()
  },[])

  return (
    <section className="oriental-section">
      <img src="/images/confeti1.png" className="confeti1" alt="" />
      <img src="/images/confeti2.png" className="confeti2" alt="" />
      <img src="/images/confeti3.png" className="confeti3" alt="" />

      <div className="container-oriental-items">
        <img
          src="/images/orientalSushi.jpg"
          alt="Oriental Sushi"
          className="orientalSushi"
          data-aos="fade-right"
          data-aos-duration="2000"
        />

        <div className="oriental-info" data-aos="fade-left" data-aos-duration="2000">
          <h1>Oriental Sushi</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Vivamus lacinia
            <br /> odio vitae vestibulum vestibulum.
          </p>
          <Button tittle="order now" bgColor="color2" />
        </div>
      </div>
    </section>
  );
};

export default OrientalSushi;
