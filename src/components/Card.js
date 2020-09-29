import React, { useState } from "react";
import './Card.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  
  useState(() =>{
    AOS.init()
  },[])

  const { img, title, text, animation, duration } = props;

  return (
    <div className="card-container" data-aos={animation} data-aos-duration={duration} data-aos-delay="1500">
      <div className="card-header">
        <img src={img} alt={title}/>
      </div>
      <div className="card-body">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
