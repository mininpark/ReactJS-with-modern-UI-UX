import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <div className="img__container-about">
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        </div>
        <p className="p__opensans my-8 text-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ducimus, corporis quae dolor quod laborum adipisci alias ullam est quia, ad tempore minus maiores sed, similique rerum nisi neque dignissimos.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" className="w-20 mx-8 my-16" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <div className="img__container-history">
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        </div>
        <p className="p__opensans my-8 text-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ducimus, corporis quae dolor quod laborum adipisci alias ullam est quia, ad tempore minus maiores sed, similique rerum nisi neque dignissimos.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
