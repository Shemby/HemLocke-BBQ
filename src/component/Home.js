import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div className='page'>
        <h1 className='heading_main'>HemLocke</h1>
        <h2 className='heading_main-small'>Barbecue</h2>
        <div className='card'>
          <p className='card_text'>
            Whether you prefer Pork, Beef, or Poultry, <br />
            HemLocke's practiced pit masters perform Traditional Low and Slow
            BBQ <br /> the way it ought to be done.
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
