import React from "react";
import "./Input.css";

const Input = ({ placeholder, onChange, name, error, onClick }) => {
    const inputClass = error ? "loginInput errorBorder" : "loginInput";
    return <div className="inputContainer">
        <input onClick={onClick} name={name} className={inputClass} type="text" placeholder={placeholder} onChange={e => onChange(name, e.target.value)}></input>
        <div className="label">{placeholder}</div>
        {error ? <div className="error">{error}</div> : null}
    </div>
}


export default Input;