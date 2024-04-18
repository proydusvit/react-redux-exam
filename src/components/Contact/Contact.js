import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  const handleKeyPress = (event) => {
    console.log(`Key Pressed: ${event.key}`);
  };

  return (
    <div className="contact-container"> {/* Добавляем класс контейнера */}
      <h1>Contact Us</h1>
      <p>Leave your contacts and we will contact you.</p>
      {/* Поле для ввода с событием onKeyDown */}
      <input
        type="text"
        className="input-field"
        placeholder="Type something..."
        onKeyDown={handleKeyPress}
      />
            {/* Кнопка с событием onClick */}
            <button className="click-button" onClick={handleClick}>Click me!</button>
      
      <p>Press a key inside the input field to see the event.</p>
    </div>
  );
};

export default Contact;
