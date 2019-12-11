import React from "react";
import "./Column.css";



class Column extends React.Component{
    render(){
        let colClass
        if(this.props.basis){
            colClass = this.props.basis
        } else {
            colClass = "auto"
        }
    return <div className={`col col${colClass} ${this.props.style}`}>{this.props.children}</div>;
    }
}

export default Column;