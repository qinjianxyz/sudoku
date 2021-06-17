import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className='Button'>
      <button onClick={() => {
          props.method();
      }} >{props.text}</button>
    </div>
  );
};

export default Button;
