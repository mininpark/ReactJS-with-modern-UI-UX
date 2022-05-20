# ReactJS with Tailwind CSS for modern UI/UX Reastaurant website

LiveURL: https://react-js-with-modern-ui-ux-hosting.vercel.app/

Live URL: [https://react-js-with-modern-ui-ux-hosting.vercel.app/](https://react-js-with-modern-ui-ux-hosting.vercel.app/)

## My process

### Built with

- React functional components and their reusability
- React file and folder structure
- Tailwind CSS properties
- Fundamental CSS properties to master flex & grid
- Fundamentals of the CSS BEM Model
    - e.g. app__gallery-content
- From soft and pleasant animations to complex gradients
- Data imported with DataMap
- Perfectly placed media queries for satisfactory responsiveness covering almost all devices
- Deployment with *npm run build* and *vercel*

### What I learned

- Construction (Folder Structure)
    - public
        - index.html
    - src
        - assets
            - img files, mp4 files
        - components
            - Footer
            - Menuitem
            - Navbar
            - SubHeading
        - constants
            - data.js, images.js, index.js (import assets files)
        - container
            - AboutUs
            - Chef
            - FindUs
            - Footer
            - Gallery
            - Header
            - Intro
            - Laurels
            - Menu
    
- Navbar
    
    ```jsx
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
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#menu">Menu</a></li>
                <li className="p__opensans"><a href="#awards">Awards</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
              </ul>
            </div>
          )}
    
        </div>
      </nav>
      )
    }
    
    export default Navbar;
    ```
    
- Gallery photo Scroll
    
    ```jsx
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
    ```
    
- Video
    
    ```jsx
    import React, { useState } from 'react';
    import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
    import { meal } from '../../constants';
    
    import './Intro.css';
    
    const Intro = () => {
      const [playVideo, setPlayVideo] = useState(false);
      const vidRef = React.useRef();
      const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    
        if(playVideo) {
          vidRef.current.pause();
        } else {
          vidRef.current.play();
        }
      }
    
      return (
      <div className="app__video h-screen">
        <video 
          src={meal} 
          ref={vidRef} 
          type="video/mp4" 
          loop 
          controls={false} 
          muted 
        />
        <div className="app__video-overlay flex__center">
          <div 
          className="app__video-overlay_circle flex__center" 
          onClick={handleVideo}
          >
            {/* If the video i ready, play it, if the video is playing, ready to pause */}
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize= {30} />
            ) : <BsFillPlayFill color="#fff" fontSize= {30} />}
          </div>
        </div>
      </div>
      )
    }
    
    export default Intro;
    ```
    
- Data Map
    
    ```jsx
    {data.wines.map((wine, index) => (
                <MenuItem key={wine.title + index} title={wine.title} price = {wine.price} tags={wine.tags}/>
              ))}
    {data.cocktails.map((cocktail, index) => (
                <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
                ))}
    ```
    

### Tailwind CSS

Control of CSS properties was more powerful than Bootstrap CSS. But there was a crush with flex of custom CSS, so that most of flex properties from Tailwind were excluded. 

Media query to use with Tailwind CSS can be a bit problematic.
