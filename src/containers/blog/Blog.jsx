import React from 'react';
import {Article} from '../../components';
import { blog001, blog002, blog003, blog004, blog005 } from './import';
import './blog.css';

const Blog = () => {
  return (
    <div className="gpt3_blog section_padding" id="blog">
      <div className="gpt3_blog-heading">
        <h1 className="gradient_text">Welcome to the Live Science Forums</h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container_groupA">
          <Article imgUrl={blog001} date="Sep 26, 2021" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quasi rerum quo! Iste facere dolores debitis similique placeat necessitatibus. Sit!" />
        </div>
        <div className="gpt3_blog-container_groupB">
          <Article imgUrl={blog002} date="Sep 26, 2021" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quasi rerum quo! Iste facere dolores debitis similique placeat necessitatibus. Sit!" />
          <Article imgUrl={blog003} date="Sep 26, 2021" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quasi rerum quo! Iste facere dolores debitis similique placeat necessitatibus. Sit!" />
          <Article imgUrl={blog004} date="Sep 26, 2021" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quasi rerum quo! Iste facere dolores debitis similique placeat necessitatibus. Sit!" />
          <Article imgUrl={blog005} date="Sep 26, 2021" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quasi rerum quo! Iste facere dolores debitis similique placeat necessitatibus. Sit!" />
        </div>
      </div>
    </div>
  )
}

export default Blog