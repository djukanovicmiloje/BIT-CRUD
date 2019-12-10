import React from "react";
import "./Input.css";

const Input = ({ placeholder, onChange }) => (<div className="inputContainer">
    <input className="loginInput" type="text" placeholder={placeholder} onChange={onChange}></input>
    <div className="label">{placeholder}</div>
</div>)


export default Input;