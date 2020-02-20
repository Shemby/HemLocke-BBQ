import React, { Component } from "react";
import NavLinks from "./NavLinks";
import "../scss/NavMenu.scss";

export class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu() {
    document.querySelector(".Navigation").style.visibility = "hidden";
    document.querySelector(".Navigation").style.opacity = "0";
  }

  render() {
    return (
      <div className="Navigation">
        <div className="pageContainer">
          <div className="close">
            <div className="icon-container" onClick={this.closeMenu}>
              <span className="icon"></span>
            </div>
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
