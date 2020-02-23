import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Contact from './Contact';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <Contact />
      </div>
    );
  }
}

export default App;
