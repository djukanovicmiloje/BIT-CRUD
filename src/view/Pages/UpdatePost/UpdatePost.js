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
    this.state = {
      loading: true
    };
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
  onUpdateClick() {
    const postInfo = {
      title: this.title,
      subtitle: this.subtitle,
      imageUrl: this.image,
      text: this.body,
      isPublic: this.private,
      sid: this.state.post.sid
    };
    userRequsets.updatePost(this.postId, postInfo, console.log);
  }
  getPost() {
    userRequsets.singlePost(this.postId, post =>
      this.setState({ post, loading: false })
    );
  }
  componentDidMount() {
    this.getPost();
  }
  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    }
    return (
      <Row>
        <Column basis={2}>
          <TextBox
            value={this.state.post.title}
            onChange={e => this.onTitleChange(e)}
            placholder="Title"
          />
        </Column>
        <Column basis={2}>
          <TextBox
            value={this.state.post.subtitle}
            onChange={e => this.onSubtitleChange(e)}
            placholder="Subtitle"
          />
        </Column>
        <Column basis={2}>
          <TextBox
            value={this.state.post.imageUrl}
            onChange={e => this.onImageChange(e)}
            placholder="Image URL"
          />
        </Column>
        <Column basis={3}>
          <TextBox
            value={this.state.post.text}
            onChange={e => {
              this.onBodyChange(e), console.log(e.target.value);
            }}
            placholder="Body"
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
