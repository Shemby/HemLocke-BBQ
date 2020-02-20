import React, { Component } from "react";
import NavLinks from "./NavLinks";
import "../scss/NavMenu.scss";

export class NavMenu extends Component {
  render() {
    return (
      <div className="Navigation">
        <div className="pageContainer">
          <div className="close">
            <span className="icon"></span>
          </div>
          <ul className="navContainer">
            <NavLinks text="Home" />

            <NavLinks text="About" />

            <NavLinks text="Menu" />

            <NavLinks text="Location/Hours" />

            <NavLinks text="Contact" />
          </ul>
        </div>
      </div>
    );
  }
}

export default NavMenu;
