import React, { Component } from 'react';

export class Menu extends Component {
  render() {
    return (
      <div className='page menu'>
        <h1 className='heading--menu'>Menu</h1>
        <p className='heading--sub-text'>
          <span className='red'>**</span>Every purchase of a HemLocke signature
          meat comes with your choice of{' '}
          <span className='red'>2 sides and a drink</span>. Extra sides cost
          $2.50 each <span className='red'>**</span>
        </p>
        <div className='menu--columns'>
          <div className='heading--menu-sub'>
            <span className='red'>Meat</span>
          </div>
          <div className='card--menu'>
            <h2 className='heading--menu-item'>
              Pork Ribs <span className='red'>$17.50</span>
            </h2>
            <p className='card--menu-text'>
              Full Rack of sweet baby back ribs and our signature BBQ sauce.
            </p>
          </div>
          <div className='card--menu'>
            <h2 className='heading--menu-item'>
              Pulled Pork <span className='red'>$10.00</span>
            </h2>
            <p className='card--menu-text'>
              3/4 lbs of pulled pork butt. Bathed in our signature BBQ sauce.
            </p>
          </div>
          <div className='card--menu'>
            <h2 className='heading--menu-item'>
              Pork Chop <span className='red'>$8.00</span>
            </h2>
            <p className='card--menu-text'>
              1/2" thick cut chop smoked to perfection and then dipped in melted
              butter.
            </p>
          </div>
          <div className='card--menu'>
            <h2 className='heading--menu-item'>
              Beef Brisket <span className='red'>$14.50</span>
            </h2>
            <p className='card--menu-text'>
              Our award winning brisket is cooked the right way. The slow way.
            </p>
          </div>
          <div className='card--menu'>
            <h2 className='heading--menu-item'>
              Beef Ribs <span className='red'>$12.00</span>
            </h2>
            <p className='card--menu-text'>
              BBQ spare ribs that fall off the bone. Slathered in HemLocke BBQ
              sauce.
            </p>
          </div>
          <div className='card--menu'>
            <h2 className='heading--menu-item'>
              BBQ Turkey <span className='red'>$9.75</span>
            </h2>
            <p className='card--menu-text'>
              Award winning. Judged by local food critics. The state fair has
              nothing on us.
            </p>
          </div>
          <div className='card--menu'>
            <h2 className='heading--menu-item'>
              BBQ Chicken <span className='red'>$8.50</span>
            </h2>
            <p className='card--menu-text'>
              Half a chicken. All white meat for a $2.00 up charge.
            </p>
          </div>
          <div className='card--menu'>
            <h2 className='heading--menu-item'>
              Fried Catfish <span className='red'>$7.00</span>
            </h2>
            <p className='card--menu-text'>
              Seasonal. Caught fresh and shipped to us daily from Lake Texoma.
            </p>
          </div>
        </div>

        <div className='menu--columns'>
          <h1 className='heading--menu-sub'>
            <span className='red'>Sides</span>{' '}
            <span className='heading--menu-price'>$2.50</span>
          </h1>
          <div className='card--menu-small'>
            <h2 className='heading--menu-item'>Potato Salad</h2>
          </div>
          <div className='card--menu-small'>
            <h2 className='heading--menu-item'>Cole Slaw</h2>
          </div>
          <div className='card--menu-small'>
            <h2 className='heading--menu-item'>Baked Beans</h2>
          </div>
          <div className='card--menu-small'>
            <h2 className='heading--menu-item'>Corn on the Cob</h2>
          </div>
          <div className='card--menu-small'>
            <h2 className='heading--menu-item'>Fried Okra</h2>
          </div>
          <div className='card--menu-small'>
            <h2 className='heading--menu-item'>Mac &amp; Cheese</h2>
          </div>
        </div>

        <div className='menu--columns'>
          <h1 className='heading--menu-sub'>
            <span className='red'>Dessert</span>
          </h1>
          <div className='card--menu-small'>
            <h2 className='heading--menu-item'>
              Coconut Pie
              <span className='red'> $3.00</span>
            </h2>
          </div>
          <div className='card--menu-small'>
            <h2 className='heading--menu-item'>
              Key Lime Pie <span className='red'>$3.00</span>
            </h2>
          </div>
          <div className='card--menu-small'>
            <h2 className='heading--menu-item'>
              TX Sheet Cake <span className='red'>$2.50</span>
            </h2>
          </div>
          <div className='card--menu-small'>
            <h2 className='heading--menu-item'>
              Banana Pudding <span className='red'>$2.50</span>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
