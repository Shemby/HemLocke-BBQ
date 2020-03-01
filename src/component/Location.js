import React, { Component } from 'react';
import ping from '../images/Location.svg';
import clock from '../images/Clock.svg';

export class Location extends Component {
  render() {
    return (
      <div className='page location'>
        <div className='card'>
          <h1 className='heading--card'>Location</h1>
          <img src={ping} alt='' className='icons--ping' />
          <p className='card--info-center'>
            <span className='red'>224 W Pecan St.</span> Celina, TX 75009
          </p>
        </div>

        <div className='card'>
          <h1 className='heading--card'>Hours of Operation</h1>
          <img src={clock} alt='' className='icons--clock' />
          <div className='card--info-container'>
            <div className='card--info'>
              <span className='red'>Sunday-Monday</span> : Closed
            </div>
            <div className='card--info'>
              <span className='red'>Tuesday-Thursday</span> : Noon - 9PM
            </div>
            <div className='card--info'>
              <span className='red'>Friday-Saturday</span> : 9AM - 10PM
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
