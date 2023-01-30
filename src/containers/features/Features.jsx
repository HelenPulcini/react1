import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit exercitationem maiores',
  },
  {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit exercitationem maiores',
  },
  {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit exercitationem maiores',
  },
  {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit exercitationem maiores',
  }
];

const Features = () => {
  return (
    <div className="gpt3_features section_padding" id="features">
      <div className="gpt3_features-heading">
        <h1 className="gradient_text">Life's Little Mysteries</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3_features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}
export default Features