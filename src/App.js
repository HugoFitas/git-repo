import React from "react";
import Button from "./components/Button";
import "./components/reset.css";
import "./components/Style.css";
import Input from "./components/Input";

function App() {
  return (
    <div className="container">
      <div className="centered-div">
        <Button />
        <Input />
      </div>
    </div>
  );
}

export default App;
