import React from "react";
import { userRequsets } from "../../../services/userFetch";
import Row from "../../Components/Row/Row";
import DashBoardBox from "./DashBoardCard";

class DashBoard extends React.Component {
  state = {
    loading: true
  };

  checkForLoad() {
    if (this.posts && this.users && this.comments) {
      const { posts, users, comments } = this;
      return this.setState({ loading: false, posts, users, comments });
    }
  }

  getInfo() {
    userRequsets.posts(posts => {
      this.posts = posts;
      this.checkForLoad();
    });
    userRequsets.users(users => {
      this.users = users;
      this.checkForLoad();
    });
    userRequsets.comments(comments => {
      this.comments = comments;
      this.checkForLoad();
    });
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    console.log(this.state);

    if (this.state.loading) {
      return <div>Page is Loading</div>;
    }

    return (
      <Row>
        <DashBoardBox
          icon="font"
          number={this.state.posts.length}
          text="Total posts"
        />
        <DashBoardBox
          icon="user-friends"
          number={this.state.users.length}
          text="Total users"
        />
        <DashBoardBox
          icon="comment"
          number={this.state.comments.length}
          text="Total comments"
        />
      </Row>
    );
  }
}

export default DashBoard;
