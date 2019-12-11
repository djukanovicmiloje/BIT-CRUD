import React from "react";
import TextBox from "../../Components/TextBox/TextBox";
import Row from "../../Components/Row/Row";
import Column from "../../Components/Column/Column";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";
import { users } from "../../../services/HttpServiceLoggedIn";

class CreatePost extends React.Component {
  constructor() {
    super();
    this.title = "";
  }
  onTitleChange(event) {
    this.title = event.target.value;    
  }
  onSubtitleChange(event) {
    this.subtitle = event.target.value;
  }
  onImageChange(event) {
    this.image = event.target.value;
  }
  onBodyChange(event) {
    this.body = event.target.value;
  }
  onPrivateChange(event){
    this.private = event.target.checked
  }
  onSaveClick(){
      const postInfo = {
          title: this.title,
          subtitle: this.subtitle,
          imageUrl: this.image,
          text: this.body,
          isPublic: this.private
      }      
      users.post("http://crud-api.hypetech.xyz/v1/posts", postInfo, console.log, console.log)
  }
  render() {
    return (
      <Row>
        <Column basis={2}>
          <TextBox onChange={(e) => this.onTitleChange(e)} placholder="Title" />
        </Column>
        <Column basis={2}>
          <TextBox onChange={(e) => this.onSubtitleChange(e)} placholder="Subtitle" />
        </Column>
        <Column basis={2}>
          <TextBox onChange={(e) => this.onImageChange(e)} placholder="Image URL" />
        </Column>
        <Column basis={2}><input type="checkbox" onChange={(e) => this.onPrivateChange(e)}></input></Column>
        <Column basis={3}>
          <TextBox onChange={(e) => this.onBodyChange(e)} placholder="Body" />
        </Column>
        <Column>
            <Button text="Save" color="green" onClick={() => this.onSaveClick()}/>           
        </Column>
        <Column> <Button text="Delete" color="red" onClick={() => this.onSaveClick()}/></Column>
      </Row>
    );
  }
}

export default CreatePost;
