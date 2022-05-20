import React from 'react';
import { FooterOverlay, Newsletter } from '../../components'

import './Footer.css';

const Footer = () => (
  <div className = "app__footer app__bg section__padding flex__center">
    <Newsletter />
    <FooterOverlay />
  </div>
);

export default Footer;
