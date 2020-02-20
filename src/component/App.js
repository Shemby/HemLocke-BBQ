import React, { Component } from "react";
import NavMenu from "./NavMenu";
import NavBar from "./NavBar";
import Home from "./Home";
import Contact from "./Contact";
import "../scss/Global.scss";

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <NavMenu />
        <Home />
        <Contact />
      </div>
    );
  }
}

export default App;
