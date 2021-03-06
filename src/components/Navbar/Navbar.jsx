import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className="app__navbar w-full flex">
    <div className="app__navbar-logo flex">
      <a href="/"><img src={images.gericht} alt="app logo" /></a>

    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#awards">Awards</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>

    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">Log In / Register</a>
      <div className="w-[1px] h-6 bg-gray"/>
      <a href="/" className="p__opensans">Book Table</a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

      {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay slide-bottom w-full bg-black h-screen">
          <MdOutlineRestaurantMenu color="#fff" fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />

          <ul className="app__navbar-smallscreen-links">
            <li className="p__cormorant hover:text-gold"><a href="#home">Home</a></li>
            <li className="p__cormorant hover:text-gold"><a href="#about">About</a></li>
            <li className="p__cormorant hover:text-gold"><a href="#menu">Menu</a></li>
            <li className="p__cormorant hover:text-gold"><a href="#awards">Awards</a></li>
            <li className="p__cormorant hover:text-gold"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}

    </div>
  </nav>
  )
}

export default Navbar;
