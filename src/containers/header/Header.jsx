import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className="gpt3_header section_padding" id="home">
      <div className="gpt3_header-content">
        <h1 className="gradient_text">Let's Build Something amazing with GPT-3 OpenAI</h1>
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
        <img src={ai} />
      </div>
    </div>
  );

}

export default Header