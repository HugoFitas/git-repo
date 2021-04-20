import React from "react";

const Input = () => {
  const [onChange, setOnChange] = React.useState("");
  return (
    <div>
      <input
        type="text"
        value={onChange}
        placeholder="Type on me!"
        onChange={(event) => setOnChange(event.target.value)}
      />
      <p className="paragraph">{onChange}</p>
    </div>
  );
};

export default Input;
