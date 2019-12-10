import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import AboutPage from './Pages/AboutPage/AboutPage';
import PostsPage from "./Pages/PostsPage/PostsPage";
import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/SignupPage/SignupPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/posts" component={PostsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    );
  }
}

export default App;
