import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Location from './Location';
import Contact from './Contact';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <About />

        <Location />
        <Contact />
        <Menu />
      </div>
    );
  }
}

export default App;
