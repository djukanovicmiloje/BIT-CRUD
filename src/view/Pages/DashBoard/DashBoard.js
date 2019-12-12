import React from "react";
import { userRequsets } from "../../../services/userFetch";
import Row from "../../Components/Row/Row";
import DashBoardBox from "./DashBoardCard";

class DashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  getInfo() {
    userRequsets.posts(posts => this.setState({ posts }));
    userRequsets.users(users => this.setState({ users }));
    userRequsets.comments(comments => this.setState({ comments, loading: false }));

    // Promise.all([posts, users, comments]).then(() => this.setState({
    //     posts: this.posts,
    //     users: this.users,
    //     comments: this.comments,
    //     loading: false
    // }))
  }
  componentDidMount() {
    this.getInfo();
  }
  render() {
    if (this.state.loading) {
      return <div>Page is Loading</div>;
    }
    return (
      <Row>
        <DashBoardBox icon="font" number={this.state.posts.length} text="Total posts" />
        <DashBoardBox icon="user-friends" number={this.state.users.length} text="Total users" />
        <DashBoardBox icon="comment" number={this.state.comments.length} text="Total comments" />
      </Row>
    );
  }
}

export default DashBoard;
