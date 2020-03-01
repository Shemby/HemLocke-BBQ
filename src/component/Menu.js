import React, { Component } from 'react';

export class Menu extends Component {
  render() {
    return (
      <div className='page menu'>
        <h1 className='menu--heading'>Menu</h1>
        <p className='heading_subText'>
          <span className='red'>**</span>Every purchase of a HemLocke signature
          meat comes with your choice of{' '}
          <span className='red'>2 sides and a drink</span>. Extra sides cost
          $2.50 each <span className='red'>**</span>
        </p>
        <div className='card card_outlined'>
          <div className='card_heading'>
            <span className='red'>Meat</span>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>
              Baby Back Ribs<span className='red'>$17.50</span>
            </h2>
            <p className='card_text'>
              Full Rack of sweet baby back ribs and our signature BBQ sauce.
            </p>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>
              Pulled Pork <span className='red'>$10.00</span>
            </h2>
            <p className='card_text'>
              3/4 lbs of pulled pork butt. Bathed in our signature BBQ sauce.
            </p>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>
              Pork Chop <span className='red'>$8.00</span>
            </h2>
            <p className='card_text'>
              1/2" thick cut chop smoked to perfection and then dipped in melted
              butter.
            </p>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>
              Beef Brisket <span className='red'>$14.50</span>
            </h2>
            <p className='card_text'>
              Our award winning brisket is cooked the right way. The slow way.
            </p>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>
              Beef Ribs <span className='red'>$12.00</span>
            </h2>
            <p className='card_text'>
              BBQ spare ribs that fall off the bone. Slathered in HemLocke BBQ
              sauce.
            </p>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>
              Smoked Turkey <span className='red'>$9.75</span>
            </h2>
            <p className='card_text'>
              Award winning. Judged by local food critics. The state fair has
              nothing on us.
            </p>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>
              BBQ Chicken <span className='red'>$8.50</span>
            </h2>
            <p className='card_text'>
              Half a chicken. All white meat for a $2.00 up charge.
            </p>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>
              Fried Catfish <span className='red'>$7.00</span>
            </h2>
            <p className='card_text'>
              Seasonal. Caught fresh and shipped to us daily from Lake Texoma.
            </p>
          </div>
        </div>

        <div className='card'>
          <h1 className='card_heading'>
            <span className='red'>Sides</span>{' '}
            <span className='side_price'>$2.50</span>
          </h1>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>Potato Salad</h2>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>Cole Slaw</h2>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>Baked Beans</h2>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>Corn on the Cob</h2>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>Fried Okra</h2>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>Mac &amp; Cheese</h2>
          </div>
        </div>

        <div className='card dessert'>
          <h1 className='card_heading'>
            <span className='red'>Dessert</span>
          </h1>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>
              Coconut Cream Pie
              <span className='red'>$3.00</span>
            </h2>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>
              Key Lime Pie <span className='red'>$3.00</span>
            </h2>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>
              TX Sheet Cake <span className='red'>$2.50</span>
            </h2>
          </div>
          <div className='card_subcard'>
            <h2 className='card_heading-sub'>
              Banana Pudding <span className='red'>$2.50</span>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
