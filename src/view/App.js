import React, { Component } from 'react';
import Container from './SharedComponents/Container/Container';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
      </Container>              
    );
  }
}

export default App;
