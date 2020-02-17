import React, { Component } from 'react';
import Nav from './Nav';
import Home from './Home';
import '../scss/Global.scss';

export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
