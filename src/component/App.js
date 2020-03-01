import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Location from './Location';
import Contact from './Contact';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Home />
          <About />
          <Menu />
          <Location />
          <Contact />
        </div>
      </Router>
    );
  }
}

export default App;
