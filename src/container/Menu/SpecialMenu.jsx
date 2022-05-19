import React from 'react';

import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding bg-black flex-col" id="menu">
    <div className="app__specialMenu-title mb-8 text-center">
      <p className="p__cormorant text-white">Menu That Fits You Palatte</p>
      <div className="img__container-spoon">
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
      </div>
      <h1 className="headtext__cormorant">Today's Speical</h1>
    </div>
    <div className="app__specialMenu-menu my-8">
      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu-menu_heading text-white p__cormorant">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price = {wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img m-4">
          <img src={images.menu} alt="menu img" />
      </div>
      <div className="app__specialMenu-menu_cocktails">
        <p className="app__specialMenu-menu_heading text-white p__cormorant">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
            ))}
        </div>
      </div>
  </div>
  <button className="custom__button" type="button">View More</button>

  </div>
);

export default SpecialMenu;
