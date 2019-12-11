import React from "react";
import "./Button.css";
import Icon from "../Icon/Icon";

const Button = ({ text, color, onClick,icon }) => <div onClick={onClick} className={`button btn${color}`}>{text ? text: <Icon icon={icon}/>}</div>

export default Button;