import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem w-100 my-4 flex flex-col">
    <div className="app__menuitem-head flex flex-col justify-between align-center">
      <div className="app__menuitem-name flex-1">
        <p className="p__cormorant" style= {{ color: '#DCCA87'}}>{title}</p>
      </div>

      <div className="app__menuitem-dash mx-4 bg-gold"></div>

      <div className="app__menuitem-price">
        <p className="p__cormorant" >{price}</p>
      </div>
    </div>
    <div className="app__menuitem-sub w-100 mt-1">
      <p className="p__opensans" style= {{color: '#AAA'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
