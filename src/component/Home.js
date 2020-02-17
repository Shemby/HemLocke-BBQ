import React, { Component } from 'react';
import '../scss/Home.scss';

export class Home extends Component {
  render() {
    return (
      <div>
        <div className='background'>
          <h1>HemLocke</h1>
          <h2>Barbecue</h2>
          <div className='main_text'>
            <p className='main_text_primary'>
              Whether you prefer Pork, Beef, or Poultry, <br />
              HemLocke's practiced pit masters perform Traditional Low and Slow
              BBQ <br /> the way it ought to be done.
            </p>
            <p className='main_text_secondary'>
              Take a look see at our <span>menu</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
