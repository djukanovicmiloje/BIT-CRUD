import React from "react";
import "./TextBox.css";

class TextBox extends React.Component {
  constructor({ onChange, placholder, value }) {
    super();
    this.state = {
      value : placholder
    };
    this.onChange = onChange;    
  }
  render() {
    return (
      <textarea
        value={this.state.value}       
        onChange={e => {
          this.onChange(e);
          this.setState({ value: e.target.value });
        }}
        className="textBox"
      ></textarea>
    );
  }
}

export default TextBox;
