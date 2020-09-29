import React from "react";
import "./Quotes.css";

const Quotes = () => {
  return (
    <section className="quotes">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity=".1"
          d="M0,32L24,53.3C48,75,96,117,144,117.3C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,192C624,203,672,181,720,149.3C768,117,816,75,864,53.3C912,32,960,32,1008,48C1056,64,1104,96,1152,112C1200,128,1248,128,1296,133.3C1344,139,1392,149,1416,154.7L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
      <div className="container-quotes">
          <img  src="/images/layer1.jpg"  alt="Takasi Mura"/>
          <p>If you are a culinary fan, if you like to spend time  in your kitchen, you likely find yourself looking for reliable resources through which you can</p>
          <h1>Takasi Mura</h1>
      </div>
    </section>
  );
};

export default Quotes;
