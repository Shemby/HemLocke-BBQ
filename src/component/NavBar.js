import React, { Component } from 'react';

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    document.querySelector('.Navigation').style.visibility = 'visible';
    document.querySelector('.Navigation').style.opacity = '1';
  }
  closeMenu() {
    document.querySelector('.nav_list').style.visibility = 'hidden';
    document.querySelector('.nav_list').style.opacity = '0';
  }

  render() {
    return (
      <div className='navbar'>
        <div className='navbar_logo'>
          <div className='navbar_logo-name'>
            HemLocke<span></span>
          </div>
          <div className='navbar_logo-desc'>Pit Style Barbecue</div>
        </div>
        <div className='navbar_open' onClick={this.openMenu}>
          <span className='navbar_open-icon'></span>
        </div>
        <div className='navbar_close' onClick={this.closeMenu}>
          <span className='navbar_close-icon'></span>
        </div>
      </div>
    );
  }
}

export default NavBar;
