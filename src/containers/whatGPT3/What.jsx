import React from 'react';
import Feature from '../../components/feature/Feature';
import './what.css';

const What = () => {
  return (
    <div className="gpt3_whatgpt3 section_margin" id="wgpt3">
      <div className="gpt3_whatgpt3-feature">
        <Feature title = 'Science Section' text ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit exercitationem maiores atque quos architecto vero dicta enim accusantium omnis!text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit exercitationem maiores atque quos architecto vero dicta enim accusantium omnis!'/>
      </div>
      <div className="gpt3_whatgpt3-heading">
        <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3_whatgpt3-container">
      <Feature title = 'Chatbots' text ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit exercitationem maiores atque quos architecto vero dicta enim accusantium omnis!'/>
      <Feature title = 'Knowledgebase' text ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit exercitationem maiores atque quos architecto vero dicta enim accusantium omnis!'/>
      <Feature title = 'Education' text ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit exercitationem maiores atque quos architecto vero dicta enim accusantium omnis!'/>
      </div>
    </div>
  )
}

export default What