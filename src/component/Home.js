import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div className='page home'>
        <h1 className='heading_main home_heading'>HemLocke</h1>
        <h2 className='heading_main-small home_heading-sub'>Barbecue</h2>
        <div className='card home_card'>
          <p className='card_text'>
            Whether you like pork, beef, or poultry, our experienced pit masters
            are commited to bringing you a quality product.
          </p>
          <p className='card_text'>
            Take a look see at our <span className='red'>menu</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
