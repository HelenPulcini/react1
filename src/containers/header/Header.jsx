import React from 'react';
import people from '../../assets/people.png';
import header from '../../assets/header.jpg';
import './header.css';

const Header = () => {
  return (
    <div className="gpt3_header section_padding" id="home">
      <div className="gpt3_header-content">
        <h1 className="gradient_text">The Science Websites That We Read Every Day</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem rem, corporis illum impedit cumque laboriosam in inventore exercitationem sequi. Quam?</p>

        <div className="gpt3_header-content_input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3_header-content_people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3_header-image">
        <img src={header} />
      </div>
    </div>
  );

}

export default Header