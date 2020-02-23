import React, { Component } from 'react';
import NavLinks from './NavLinks';

export class NavMenu extends Component {
  render() {
    return (
      <ul className='navbar_list'>
        <NavLinks text='Home' />

        <NavLinks text='About' />

        <NavLinks text='Menu' />

        <NavLinks text='Location/Hours' />

        <NavLinks text='Contact' />
      </ul>
    );
  }
}

export default NavMenu;
