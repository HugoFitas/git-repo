import React from "react";

const Button = () => {
  const clickHandler = () => {
    alert("Hello World!");
  };
  return (
    <div className="button-div">
      <button onClick={clickHandler}>Click Me!</button>
    </div>
  );
};

export default Button;
