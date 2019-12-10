import React from "react";
import Row from "../../../SharedComponents/Row/Row";
import PostCard from "./PostCard/PostCard";
import fetchPosts from "../../../../services/fetchPosts";

class PostsPageContent extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  getPosts() {
    fetchPosts().then(response =>
      this.setState({ loading: false, posts: response.data })
    );
  }
  componentDidMount(){
      this.getPosts();
  }
  render() {   
    if (this.state.loading) {
      return <div>Page is loading</div>;
    }
    return (
      <Row>
        {this.state.posts.map(post => (
          <PostCard post={post} />
        ))}
      </Row>
    );
  }
}

export default PostsPageContent;
