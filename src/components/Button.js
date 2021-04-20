import React from "react";

const Button = () => {
  const clickHandler = () => {
    alert("Hello World!");
  };
  return (
    <div>
      <button onClick={clickHandler}>Click Me!</button>
    </div>
  );
};

export default Button;
