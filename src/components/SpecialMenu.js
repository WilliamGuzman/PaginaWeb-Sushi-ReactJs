import React, { useEffect } from "react";
import "./SpecialMenu.css";
import Card from "./Card";
import "aos/dist/aos.css";
import AOS from "aos";

const SpecialMenu = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="section-special-menu">
      <img src="/images/confeti4.png" className="confeti4" alt="" />
      <img src="/images/confeti5.png" className="confeti5" alt="" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e89c9c"
          fillOpacity="10"
          d="M0,160L26.7,138.7C53.3,117,107,75,160,90.7C213.3,107,267,181,320,181.3C373.3,181,427,107,480,64C533.3,21,587,11,640,16C693.3,21,747,43,800,64C853.3,85,907,107,960,106.7C1013.3,107,1067,85,1120,74.7C1173.3,64,1227,64,1280,85.3C1333.3,107,1387,149,1413,170.7L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <div className="special-menu-container">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          Special Menu
        </h1>
        <div className="special-menu-container-card">
          <Card
            img="/images/menu1.jpg"
            title="Title Here"
            text="Lorem ipsum dolor sit amet,  consectetur adipiscing elit."
            animation="fade-up"
            duration="1000"
          />

          <Card
            img="/images/menu2.jpg"
            title="Title Here"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            animation="fade-up"
            duration="1000"
          />

          <Card
            img="/images/menu3.jpg"
            title="Title Here"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            animation="fade-up"
            duration="1000"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
