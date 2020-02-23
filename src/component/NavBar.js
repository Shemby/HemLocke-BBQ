import React, { Component } from 'react';
import NavMenu from './NavMenu';

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const navBtn = document.querySelector('.navbar_btn');
    const navList = document.querySelector('.navbar_list');
    console.log(this.navBtn);
    if (!this.state.menuOpen) {
      navBtn.classList.add('open');
      navList.classList.add('open');
      this.setState({
        menuOpen: true
      });
    } else {
      navBtn.classList.remove('open');
      navList.classList.remove('open');
      this.setState({
        menuOpen: false
      });
    }
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
        <div className='navbar_btn' onClick={this.toggleMenu}>
          <div className='navbar_btn-icon'></div>
        </div>
        <NavMenu />
      </div>
    );
  }
}

export default NavBar;
