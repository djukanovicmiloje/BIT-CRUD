import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import AboutPage from './Pages/AboutPage/AboutPage';
import PostsPage from "./Pages/PostsPage/PostsPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path = "/about" component={AboutPage}/>
        <Route path = "/posts" component={PostsPage}/>
      </Switch>
    );
  }
}

export default App;
