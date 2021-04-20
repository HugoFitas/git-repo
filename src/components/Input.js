import React from "react";

const Input = () => {
  const [onChange, setOnChange] = React.useState("");
  return (
    <div>
      <input onChange={(event) => setOnChange(event.target.value)} />
      <p>{onChange}</p>
    </div>
  );
};

export default Input;
