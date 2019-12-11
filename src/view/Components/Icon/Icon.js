import React from "react";
import "./Icon.css";

const Icon = ({ icon, color }) => <div className="icon"><i className={`fas fa-${icon} icon${color}`}></i></div>;

export default Icon;