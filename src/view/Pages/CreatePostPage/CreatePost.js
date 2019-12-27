import React from "react";
import TextBox from "../../Components/TextBox/TextBox";
import Row from "../../Components/Row/Row";
import Column from "../../Components/Column/Column";
import Button from "../../Components/Button/Button";
import Title from "../../Components/Title/Title";
import { users } from "../../../services/HttpServiceLoggedIn";
import { Redirect } from "react-router-dom";

class CreatePost extends React.Component {
  state = {
    created: false,
    canceled: false
  };

  onInputChange(name, value) {
    this.setState({ [name]: value });
  }

  onPrivateChange(event) {
    this.private = event.target.checked;
  }

  onSaveClick() {
    const postInfo = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      imageUrl: this.state.imageUrl,
      text: this.state.text,
      isPublic: this.private
    };

    users.post(
      "http://crud-api.hypetech.xyz/v1/posts",
      postInfo,
      () => this.setState({ created: true }),
      () => this.setState({ failedToCreate: true })
    );
  }

  onCanaclClick() {
    this.setState({ canceled: true });
  }

  render() {
    if (this.state.created) {
      return <div>Post created</div>;
    }
    if (this.state.canceled) {
      return <Redirect to="/dashboard" />;
    }

    if (this.state.failedToCreate) {
      return <div>Failed To Create</div>;
    }

    return (
      <Row>
        <Row>
          <Title text="Create Post" />
        </Row>
        <Column basis={2}>
          <TextBox
            onChange={(name, value) => this.onInputChange(name, value)}
            name="title"
            placeholder="Title"
          />
        </Column>
        <Column basis={2}>
          <TextBox
            onChange={(name, value) => this.onInputChange(name, value)}
            name="subtitle"
            placeholder="Subtitle"
          />
        </Column>
        <Column basis={2}>
          <TextBox
            onChange={(name, value) => this.onInputChange(name, value)}
            name="imageUrl"
            placeholder="Image URL"
          />
        </Column>
        <Column basis={2}>
          <span>Public</span>
          <input
            type="checkbox"
            onChange={e => this.onPrivateChange(e)}
          ></input>
        </Column>
        <Column basis={3}>
          <TextBox
            onChange={(name, value) => this.onInputChange(name, value)}
            name="text"
            placeholder="Body"
          />
        </Column>
        <Column>
          <Button
            text="Create Post"
            color="green"
            onClick={() => this.onSaveClick()}
          />
        </Column>
        <Column>
          <Button
            text="Cancel"
            color="red"
            onClick={() => this.onCanaclClick()}
          />
        </Column>
      </Row>
    );
  }
}

export default CreatePost;
