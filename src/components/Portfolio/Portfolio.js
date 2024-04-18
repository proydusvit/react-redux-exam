import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <p>Explore our impressive portfolio showcasing our latest projects and accomplishments.</p>
      <div className="project">
        <h2>Project 1: E-commerce Website Redesign</h2>
        <p>Our team redesigned and optimized an e-commerce website, resulting in a 30% increase in conversions.</p>
      </div>
      <div className="project">
        <h2>Project 2: Mobile App Development</h2>
        <p>We developed a cutting-edge mobile app with advanced features, garnering rave reviews from users.</p>
      </div>
      <div className="project">
        <h2>Project 3: Brand Identity Refresh</h2>
        <p>We refreshed the brand identity of a client, leading to greater brand recognition and customer engagement.</p>
      </div>
    </div>
  );
};

export default Portfolio;
