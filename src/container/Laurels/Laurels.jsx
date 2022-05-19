import React from 'react';
import { SubHeading } from '../../components'
import { images, data } from '../../constants';

import './Laurels.css';

const AwardCard = ({ award: {imgUrl, title, subtitle }}) => (
  <div className="app__laurels_awards-card m-4">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style= {{ color: '#DCCA87' }}>{title}</p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding flex flex-col" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Award & recognition"/>
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
      <div className="app__laurels_awards-content mt-12">
        {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
      </div>
      <div className="app__laurels_awards-img">
        <img src={images.laurels} alt="laurels" />
      </div>
      </div>
    </div>

  </div>
);

export default Laurels;
