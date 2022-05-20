import React from 'react';
import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className="app__footerOverlay mt-12 mb-4">
    <div className="app__footer-overlay">
      <div className="app__footer-overlay_contact">
        <p className="p__cormorant">Contact Us</p>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-344-1230</p>
      </div>
      <div className="app__footer-overlay_social">
        <a href="/"><img src={images.gericht} style={{color: '#DCCA87'}} alt="app logo" /></a>
        <p className="p__opensans">"The best way to find yourself is to lose yourself <br/>in the service of others.”</p>
        <img src={images.spoon} alt="img spoon"/>
        <div className="app__footer-overlay_social-logos mt-4">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-overlay_workingHours">
      <p className="p__cormorant">Working Hours</p>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00am -24:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00am -23:00 pm</p>
      </div>
    </div>
  <p className="p__opensans text-center mt-16 mb-12">2022 Gerícht. All Rights reserved.</p>
  </div>
);

export default FooterOverlay;
