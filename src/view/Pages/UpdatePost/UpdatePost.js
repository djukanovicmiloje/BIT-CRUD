import React from "react";
import { userRequsets } from "../../../services/userFetch";
import TextBox from "../../Components/TextBox/TextBox";
import Row from "../../Components/Row/Row";
import Column from "../../Components/Column/Column";
import Button from "../../Components/Button/Button";

class UpdatePost extends React.Component {
  constructor({ postId }) {
    super();
    this.postId = postId;
  }

  state = {
    loading: true
  };

  onInputChange(name, value) {
    this.setState({ [name]: value });
  }

  onUpdateClick() {
    const postInfo = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      imageUrl: this.state.imageUrl,
      text: this.state.text,
      sid: this.state.sid
    };
    userRequsets.updatePost(this.postId, postInfo, () =>
      this.setState({ updated: true })
    );
  }

  getPost() {
    userRequsets.singlePost(this.postId, post => {
      const { title, subtitle, imageUrl, text, sid } = post;
      this.setState({ title, subtitle, imageUrl, text, sid, loading: false });
    });
  }

  componentDidMount() {
    this.getPost();
  }
  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    }
    if (this.state.updated) {
      return <div>Post Updated</div>;
    }
    return (
      <Row>
        <Column basis={2}>
          <TextBox
            value={this.state.title}
            onChange={(name, value) => this.onInputChange(name, value)}
            name="title"
            placeholder="Title"
          />
        </Column>
        <Column basis={2}>
          <TextBox
            value={this.state.subtitle}
            onChange={(name, value) => this.onInputChange(name, value)}
            name="subtitle"
            placeholder="Subtitle"
          />
        </Column>
        <Column basis={2}>
          <TextBox
            value={this.state.imageUrl}
            onChange={(name, value) => this.onInputChange(name, value)}
            name="imageUrl"
            placeholder="Image URL"
          />
        </Column>
        <Column basis={3}>
          <TextBox
            value={this.state.text}
            onChange={(name, value) => {
              this.onInputChange(name, value);
            }}
            name="text"
            placeholder="Body"
          />
        </Column>
        <Column>
          <Button
            text="update"
            color="green"
            onClick={() => this.onUpdateClick()}
          />
        </Column>
      </Row>
    );
  }
}

export default UpdatePost;
