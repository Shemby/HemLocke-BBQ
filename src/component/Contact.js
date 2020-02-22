import React, { Component } from "react";
import "../scss/Contact.scss";

export class Contact extends Component {
  render() {
    return (
      <div className="contactPage">
        <h1 className="contactHeading">Contact Us</h1>
        <div className="contactInfo">
          <div className="reservation">
            <h2>Make a Reservation</h2>
            <div className="phone">
              <span className="red">Telephone</span> : (972)914-0989
            </div>
            <div className="email">
              <span className="red">Email</span> : HemLocke_res@gmail.com
            </div>
          </div>
          <div className="general">
            <h2>General Inquiry</h2>
            <div className="phone">
              <span className="red">Telephone</span> : (972)914-0899
            </div>
            <div className="fax">
              <span className="red">Fax</span> : (972)914-0879
            </div>
            <div className="email">
              <span className="red">Email</span> : HemLocke_inq@gmail.com
            </div>
          </div>
        </div>
        <div className="socialMedia">
          <img src="./images/facebook.svg" alt="" />
          <img src="./images/instagram.svg" alt="" />
          <img src="./images/twitter.svg" alt="" />
        </div>

        <form action="submit" className="contactForm">
          <input type="text" placeholder="First Name" className="fname" />

          <input type="text" placeholder="Last Name" className="lname" />

          <input type="text" placeholder="Subject" className="subject" />

          <textarea type="text" placeholder="Message" className="message" />
          <input type="submit" className="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
