import React from "react";
import TextBox from "../../Components/TextBox/TextBox";
import Row from "../../Components/Row/Row";
import Column from "../../Components/Column/Column";
import Button from "../../Components/Button/Button";
import Title from "../../Components/Title/Title"
import { users } from "../../../services/HttpServiceLoggedIn";

class CreatePost extends React.Component {

  onInputChange(name, value) {
    this.setState({ [name]: value });
  }
  onPrivateChange(event) {
    this.private = event.target.checked
  }
  onSaveClick() {
    const postInfo = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      imageUrl: this.state.imageUrl,
      text: this.state.text,
      isPublic: this.private
    }
    users.post("http://crud-api.hypetech.xyz/v1/posts", postInfo, console.log, console.log)
  }
  render() {
    return (
      <Row>
        <Row><Title text="Create Post" /></Row>
        <Column basis={2}>
          <TextBox onChange={(name, value) => this.onInputChange(name, value)} name="title" placeholder="Title" />
        </Column>
        <Column basis={2}>
          <TextBox onChange={(name, value) => this.onInputChange(name, value)} name="subtitle" placeholder="Subtitle" />
        </Column>
        <Column basis={2}>
          <TextBox onChange={(name, value) => this.onInputChange(name, value)} name="imageUrl" placeholder="Image URL" />
        </Column>
        <Column basis={2}><span>Public</span><input type="checkbox" onChange={(e) => this.onPrivateChange(e)}></input></Column>
        <Column basis={3}>
          <TextBox onChange={(name, value) => this.onInputChange(name, value)} name="text" placeholder="Body" />
        </Column>
        <Column>
          <Button text="Save" color="green" onClick={() => this.onSaveClick()} />
        </Column>
        <Column> <Button text="Delete" color="red" onClick={() => this.onSaveClick()} /></Column>
      </Row>
    );
  }
}

export default CreatePost;
