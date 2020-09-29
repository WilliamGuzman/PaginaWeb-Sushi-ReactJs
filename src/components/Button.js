import React from "react";
import "./Button.css";

const Button = (props) =>{

  const { tittle, bgColor } = props;
  return(
      <button type="button" className={`btn ${bgColor}`}>
          {tittle}
      </button>
  );
}

export default Button;