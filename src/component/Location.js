import React, { Component } from 'react';
import Map from '../images/Map.png';

export class Location extends Component {
  render() {
    return (
      <div className='page page_location'>
        <h1 className='heading_main'>Location &</h1>
        <h1 className='heading_main-small'>Hours of Operation</h1>

        <div className='card'>
          <h2 className='card_heading'>Hours of Operation</h2>
          <div className='card_text'>
            <div className='card_row'>
              <span className='red'>Sunday-Monday</span> : Closed
            </div>
            <div className='card_row'>
              <span className='red'>Tuesday-Thursday</span> : 12:00PM - 9:30PM
            </div>
            <div className='card_row'>
              <span className='red'>Friday-Saturday</span> : 9:00AM - 10:00PM
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card_text'>
            <h2 className='card_heading'>Location</h2>
            <span className='red'>Street Address</span> : 224 W Pecan St.
            Celina, TX 75009
          </div>
        </div>
        <img src={Map} alt='' className='map' />
      </div>
    );
  }
}

export default Location;
