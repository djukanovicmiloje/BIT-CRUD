import React from "react";
import "./TextBox.css";

const TextBox = ({ onChange, name, value, placeholder }) => {
  return (
    <div className="textBoxContainer">
      <textarea
        name={name}
        value={value}
        onChange={e => {
          onChange(name, e.target.value);
        }}
        className="textBox"
      ></textarea>
      <div className="textBoxLabel">{placeholder}</div>
    </div>
  );
}


export default TextBox;
