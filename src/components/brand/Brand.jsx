import React from 'react';
import { atlassian, dropbox, google, shopify, slack } from './import';
import './brand.css';

const Brand = () => {

  return (
    
    <div className="gpt3_brand section_padding">
      <div>
        <img src={google} />
      </div>
      <div>
        <img src={slack} />
      </div>
      <div>
        <img src={atlassian} />
      </div>
      <div>
        <img src={dropbox} />
      </div>
      <div>
        <img src={shopify} />
      </div>
    </div>
  )
}

export default Brand