import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    return (
      <div className='page'>
        <h1 className='header_main'>Contact Us</h1>
        <div className='card'>
          <h2 className='card_heading'>Make a Reservation</h2>
          <div className='card_text'>
            <span className='red'>Telephone</span> : (972)914-0989
          </div>
          <div className='card_text'>
            <span className='red'>Email</span> : HemLocke_res@gmail.com
          </div>
        </div>
        <div className='card'>
          <h2 className='card_heading'>General Inquiry</h2>
          <div className='card_text'>
            <span className='red'>Telephone</span> : (972)914-0899
          </div>
          <div className='card_text'>
            <span className='red'>Fax</span> : (972)914-0879
          </div>
          <div className='card_text'>
            <span className='red'>Email</span> : HemLocke_inq@gmail.com
          </div>
        </div>

        <div className='card_media'>
          <img src='./images/facebook.svg' alt='' />
          <img src='./images/instagram.svg' alt='' />
          <img src='./images/twitter.svg' alt='' />
        </div>

        <form action='submit' className='form_contact'>
          <input
            type='text'
            placeholder='First Name'
            className='form_input-small'
          />

          <input
            type='text'
            placeholder='Last Name'
            className='form_input-small'
          />

          <input
            type='text'
            placeholder='Subject'
            className='form_input-large'
          />

          <textarea
            type='text'
            placeholder='Message'
            className='form_textarea'
          />
          <input type='submit' className='form_button-red' value='submit' />
        </form>
      </div>
    );
  }
}

export default Contact;
