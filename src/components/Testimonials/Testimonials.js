import React, { useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const testimonial = testimonialInputRef.current.value;
    console.log('Received testimonial:', testimonial);
  };

  return (
    <div className="testimonials-container">
      <h1>Client Testimonials</h1>
      <p>See what our clients have to say about their experience with us.</p>

      {/* Неконтролируемая форма */}
      <form onSubmit={handleSubmit}>
        <label>
          Leave your testimonial:
          <input type="text" ref={testimonialInputRef} />
        </label>
        <br />
        <button className="submit-button" type="submit">Submit Testimonial</button>
      </form>
    </div>
  );
};

export default Testimonials;
