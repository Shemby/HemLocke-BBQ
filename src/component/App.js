import React, { Component } from "react";
import NavMenu from "./NavMenu";
import NavBar from "./NavBar";
import Home from "./Home";
import "../scss/Global.scss";

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <NavMenu />
      </div>
    );
  }
}

export default App;
