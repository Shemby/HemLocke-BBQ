import React, { Component } from 'react';
import hemlocke from '../images/HemLocke.svg';

export class Home extends Component {
  render() {
    return (
      <div className='page home'>
        <div className='home--logo-container'>
          <h1 className='heading'>HemLocke</h1>
          <img src={hemlocke} alt='logo' className='home--logo' />
        </div>
        <div className='home--btn-container'>
          <button className='btn--menu'>See Our Menu</button>
          <button className='btn--contact'>Contact Us</button>
        </div>
      </div>
    );
  }
}

export default Home;
