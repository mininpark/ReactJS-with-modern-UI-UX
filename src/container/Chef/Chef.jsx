import React from 'react';
import {SubHeading} from '../../components'
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding w-100">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="img chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What We beliebe in</h1>

      <div className="app__chef-content w-100 mt-18">
        <div className="app__chef-content_quote mt-4">
          <div className="img__container-sign">
            <img src={images.quote} alt="quote" className="mb-4 mr-8" />
          </div>
          <p className="p__opensans">Incidunt nesciunt eligendi explicabo numquam. Doloribus, ex obcaecati!</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam natus placeat dolores, delectus accusantium nostrum dolore, eos culpa commodi voluptatum aperiam aliquid, in blanditiis incidunt quod facilis! A, porro necessitatibus.</p>
      </div>

      <div className="app__chef-sign w-100 mt-12">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
