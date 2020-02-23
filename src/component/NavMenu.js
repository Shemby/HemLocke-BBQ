import React, { Component } from 'react';
import NavLinks from './NavLinks';

export class NavMenu extends Component {
  render() {
    return (
      <div className='nav'>
        <ul className='nav_list'>
          <NavLinks text='Home' />

          <NavLinks text='About' />

          <NavLinks text='Menu' />

          <NavLinks text='Location/Hours' />

          <NavLinks text='Contact' />
        </ul>
      </div>
    );
  }
}

export default NavMenu;
