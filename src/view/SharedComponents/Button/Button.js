import React from "react";
import "./Button.css";

const Button = ({ text, color, onClick }) => <div onClick={onClick} className={`button btn${color}`}>{text}</div>

export default Button;