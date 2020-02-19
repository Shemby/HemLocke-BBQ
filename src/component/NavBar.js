import React, { Component } from "react";
import "../scss/NavBar.scss";

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    console.log("opened menu");
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
        <span className="menu" onClick={this.openMenu}></span>
      </div>
    );
  }
}

export default NavBar;
