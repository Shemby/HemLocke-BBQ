import React, { Component } from 'react';
import plate from '../images/plate.jpg';
import owner from '../images/owner.jpg';

export class About extends Component {
  render() {
    return (
      <div className='page about'>
        <h1 className='heading'>About Us</h1>
        <div className='about--food'>
          <h2 className='heading--sub-heading'>Our Food</h2>
          <img src={plate} alt='' className='image--ribs' />
          <p className='about--food-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            id eros elementum accumsan. Nam congue vulputate massa at rhoncus.
            Etiam sollicitudin hendrerit consequat. Nulla facilisi. Fusce eu sem
            in risus malesuada tincidunt. Donec cursus lectus a malesuada
            pellentesque. Donec mattis velit sagittis ante dictum, in sodales ex
            lacinia. Cras felis libero, dapibus id tempus eget, feugiat vitae
            ex. Nam vel interdum purus. Sed id elit sed odio gravida vulputate.
            Vivamus viverra sodales ante, at tempus dui ullamcorper at. Cras
            urna nisl, malesuada non lorem vel, iaculis sagittis risus. Nam
            tristique efficitur mi sed cursus.
          </p>
        </div>
        <div className='about--owner'>
          <h2 className='heading--sub-heading'>Meet the Owner</h2>
          <img src={owner} alt='' className='image--owner' />
          <p className='about--owner-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            id eros elementum accumsan. Nam congue vulputate massa at rhoncus.
            Etiam sollicitudin hendrerit consequat. Nulla facilisi. Fusce eu sem
            in risus malesuada tincidunt. Donec cursus lectus a malesuada
            pellentesque. Donec mattis velit sagittis ante dictum, in sodales ex
            lacinia. Cras felis libero, dapibus id tempus eget, feugiat vitae
            ex. Nam vel interdum purus. Sed id elit sed odio gravida vulputate.
            Vivamus viverra sodales ante, at tempus dui ullamcorper at. Cras
            urna nisl, malesuada non lorem vel, iaculis sagittis risus. Nam
            tristique efficitur mi sed cursus. Fusce ut velit nisi. Ut at dolor
            lobortis, consectetur ex vel, suscipit erat.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
