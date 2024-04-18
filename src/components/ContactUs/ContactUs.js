import React, { Component } from 'react';
import './ContactUs.css'; 

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleButtonClick = () => {
    console.log(`User's message: ${this.state.userInput}`);
  };

  render() {
    return (
      <div className="contact-us-container"> 
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us for any inquiries or feedback.</p>

        {/* Контролируемая форма */}
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          className="message-input"
          value={this.state.userInput}
          onChange={this.handleInputChange}
          rows="4"
          cols="50"
        />

        <button className="submit-button" onClick={this.handleButtonClick}>Submit Message</button>
      </div>
    );
  }
}

export default ContactUs;
