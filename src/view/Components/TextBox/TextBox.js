import React from "react";
import "./TextBox.css";

const TextBox = ({ onChange, name, value, }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={e => {
        onChange(name, e.target.value);
      }}
      className="textBox"
    ></textarea>
  );
}


export default TextBox;
