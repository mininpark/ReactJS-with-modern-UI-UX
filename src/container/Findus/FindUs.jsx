import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant mb-12">Find Us</h1>
      <div className="app__wrapper-content">
      <p className="p__opensans my-8">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG </p>
      <p className="p__cormorant my-8" style={{color: '#DCCA87'}}>Opening Hours </p>
      <p className="p__cormorant my-8">Mon - Fri: 10:00 am - 02:00 am </p>
      <p className="p__cormorant my-8">Sat - Sun: 10:00 am - 03:00 am </p>
      
      
      <button type="button" className="custom__button">Explore Menu</button>

      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={ images.findus } alt="findus" />
    </div>
  </div>
);

export default FindUs;
