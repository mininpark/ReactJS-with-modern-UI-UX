import React from 'react';
import { SubHeading } from '../';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__footer-newsletter flex__center section__padding bg-black">
    <SubHeading title="Nesletter" />
    <h1 className="headtext__cormorant text-center">Subscribe To Our Newsletter</h1>
    <p className="p__opensans m-8">And never miss latest Updates!</p>
    <form className="app__footer-newsletter_form">
      <input type="email" placeholder="Email Address" />
      <button type="submit" className="custom__button">Subscribe</button>
    </form>
  </div>
);

export default Newsletter;
