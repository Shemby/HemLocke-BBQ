import React, { Component } from 'react';
import young from '../images/Owner_Young.jpg';
import family from '../images/Owner_Family.jpg';

export class About extends Component {
  render() {
    return (
      <div className='page page_about'>
        <h1 className='heading_main'>About Us</h1>
        <div className='card_text card_text-top'>
          Here at HemLocke Barbecue, we have two priorities. The first is
          family. Our founder, <span className='red'>Carrol Locke</span>, was a
          man who loved his family above all else and considered it his first
          priority. Secondarily, Carrol was about making great barbecue.
          <span className='red'>perfected his methods</span>He over years of
          family barbecues. So when you sit down at one of our tables and bite
          into our traditional wood smoked, locally sourced, carefully crafted
          food, well, it’s like for a moment,
          <span className='red'>you’re one of the family</span>.
        </div>
        <img src={young} alt='' className='card_img-young' />
        <div className='card_text card_text-bottom'>
          HemLocke Barbecue makes sure that we source our meats from the highest
          quality <span className='red'>local suppliers</span>. You won’t find
          hormones, antibiotics, or animals who have been fed a sub par diet at
          our establishment. At HemLocke, we believe in providing our family the
          <span className='red'>quality</span> they deserve.
        </div>
        <img src={family} alt='' className='card_img-family' />
      </div>
    );
  }
}

export default About;
