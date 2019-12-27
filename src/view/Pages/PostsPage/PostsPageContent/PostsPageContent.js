import React from "react";
import Row from "../../../Components/Row/Row";
import PostCard from "./PostCard/PostCard";
import { http } from "../../../../services/HttpService";
import LoadingScreen from "../../../Components/LoadingScreen/LoadingScreen";

class PostsPageContent extends React.Component {
  state = {
    loading: true
  };

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
      return <LoadingScreen />;
    }
    return (
      <Row>
        {this.state.posts.map((post, key) => (
          <PostCard key={key} post={post} />
        ))}
      </Row>
    );
  }
}

export default PostsPageContent;
