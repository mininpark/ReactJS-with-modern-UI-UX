import React from 'react';

import { images } from '../../constants'

const SubHeading = ({ title }) => (
  <div style={{marginBottom: '1rem'}}>
    <p className="p__cormorant">{ title }</p>
    <div className="img__container-spoon flex__center">
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  </div>
);

export default SubHeading;
