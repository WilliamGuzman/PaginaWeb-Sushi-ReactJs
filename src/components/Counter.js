import React, { useState } from "react";
import "./Counter.css";
import AnimatedNumber from "animated-number-react";

const Counter = (props) => {
  const [functionInit, setFunction] = useState(false);

  const { number, label } = props;
  const formatValue = (value) => value.toFixed(0);

  window.onscroll = () => {
    // Obtenemos la posicion del scroll en pantall
    const scroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
    if (scroll > 2600) {
      setFunction(true);
      console.log(number);
    }
  };

  return (
    <div className="counter-container">
      <div className="circle">
        <h1>
          <AnimatedNumber
            value={number}
            formatValue={formatValue}
            duration={3000}
          />
        </h1>
        <h2>{label}</h2>
      </div>
    </div>
  );
};

export default Counter;
