import React from "react";
import Row from "../../../Components/Row/Row";
import PostCard from "./PostCard/PostCard";
import { http } from "../../../../services/HttpService";

class PostsPageContent extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  setPosts(posts) {
    this.setState({ loading: false, posts });
  }
  getPosts() {
    http.get("http://crud-api.hypetech.xyz/v1/posts", posts =>
      this.setPosts(posts)
    );
  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    if (this.state.loading) {
      return <div>Page is loading</div>;
    }
    return (
      <Row>
        {console.log(this.state.posts)}
        {this.state.posts.map(post => (
          <PostCard post={post} />
        ))}
      </Row>
    );
  }
}

export default PostsPageContent;
