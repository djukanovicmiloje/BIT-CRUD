import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import CreatePostPage from "./Pages/CreatePostPage/CreatePostPage";
import MyPostsPage from "./Pages/MyPosts/MyPostsPage";
import DashBoardPage from "./Pages/DashBoard/DashBoardPage";
import UpdatePostPage from "./Pages/UpdatePost/UpdatePostPage";

class App extends Component {
  render() {
    const loggedIn = JSON.parse(sessionStorage.getItem("loggedIn"));
    console.log(loggedIn);
    return (
      <Switch>
        <Route path="/myposts" component={MyPostsPage} />
        <Route path="/createpost" component={CreatePostPage} />
        <Route path="/update/:id" component={UpdatePostPage} />
        <Route path="/dashboard" component={DashBoardPage} />
        <Route path="/posts" component={PostsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        {loggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/posts" />}
      </Switch>
    );
  }
}

export default App;
