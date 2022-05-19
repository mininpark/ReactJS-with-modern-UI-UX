import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { SubHeading } from '../../components'
import { images } from '../../constants';

import './Gallery.css';

const galleryImages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04];

{/* image casoul we need function not just a const*/}
const Gallery = () => {
  {/* Create a scrollRef */}
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="app__gallery flex__center bg-black section__padding">
      <div className="app__gallery-content pr-8">
        <SubHeading title="Instagram"/>
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans text-white mt-8 mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil rerum ex, ut eius sapiente sed quod deleniti provident. Ea quae modi quos eveniet voluptas. Pariatur, nesciunt ducimus. Voluptatum, eum quasi?</p>
        <button type="button" className="custom__button mb-8">View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container my-4" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key= {`gallery__image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}

        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icons" onClick={() => scroll('left') } />
          <BsArrowRightShort className="gallery__arrow-icons" onClick={() => scroll('right') } />
        </div>
      </div>
    </div>
  );

}
export default Gallery;
