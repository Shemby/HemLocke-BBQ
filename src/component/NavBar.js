import React, { Component } from "react";
import "../scss/NavBar.scss";

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    document.querySelector(".Navigation").style.visibility = "visible";
    document.querySelector(".Navigation").style.opacity = "1";
  }

  render() {
    return (
      <div className="header">
        <div className="header_logo">
          <div className="header_logo_name">
            HemLocke<span></span>
          </div>
          <div className="header_logo_subName">Pit Style Barbecue</div>
        </div>
        <div className="menu-container" onClick={this.openMenu}>
          <span className="menu"></span>
        </div>
      </div>
    );
  }
}

export default NavBar;
