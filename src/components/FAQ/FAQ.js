import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container"> 
      <h1>Frequently Asked Questions</h1>
      <div className="question-answer">
        <h2>1. How can I track my order?</h2>
        <p>To track your order, simply go to the 'Track Order' page on our website and enter your order number and email address.</p>
      </div>
      <div className="question-answer"> 
        <h2>2. What payment methods do you accept?</h2>
        <p>We accept all major credit cards, PayPal, and bank transfers.</p>
      </div>
      <div className="question-answer">
        <h2>3. How long does shipping take?</h2>
        <p>Shipping times vary depending on your location. Generally, orders are processed within 1-2 business days and delivery takes 3-5 business days within the US.</p>
      </div>
      <div className="question-answer">
        <h2>4. What is your return policy?</h2>
        <p>We offer a 30-day return policy for most items. If you're not satisfied with your purchase, you can return it for a full refund or exchange.</p>
      </div>
    </div>
  );
};

export default FAQ;
