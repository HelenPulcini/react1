import React from 'react';
import section from '../../assets/section.jpg';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3_possibility section_padding" id="possibility">
      <div className="gpt3_possibility-image">
        <img src={section} alt="possibility" />
      </div>
      <div className="gpt3_possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient_text">Live Science is part of an international media group and leading digital
                    publisher</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit exercitationem maiores atque quos architecto vero dicta enim accusantium omnis</p>
        <h4>Visit our corporate site</h4>
      </div>
    </div>
  )
}

export default Possibility