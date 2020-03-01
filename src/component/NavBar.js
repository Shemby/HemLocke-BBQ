import React, { Component } from 'react';
import NavMenu from './NavMenu';
import HL from '../images/HL.svg';

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const navBtn = document.querySelector('.navbar--btn');
    const navList = document.querySelector('.navbar--list');
    if (!this.state.menuOpen) {
      navBtn.classList.add('isOpen');
      navList.classList.add('isOpen');
      this.setState({
        menuOpen: true
      });
    } else {
      navBtn.classList.remove('isOpen');
      navList.classList.remove('isOpen');
      this.setState({
        menuOpen: false
      });
    }
  }

  render() {
    return (
      <div className='navbar'>
        <img src={HL} alt='' className='navbar--logo' />
        <div className='navbar--btn' onClick={this.toggleMenu}>
          <div className='navbar--icon'></div>
        </div>
        <NavMenu />
      </div>
    );
  }
}

export default NavBar;
