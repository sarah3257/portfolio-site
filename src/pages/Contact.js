import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css'; // CSS file for styling

const Contact = () => {
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6zhahmk",         // Service ID
      "template_r04cypj",        // Template ID
      e.target,
      "iVUZFWcg2ibcGI8fd"        // Public Key (User ID)
    )
    .then((result) => {
      console.log(result.text);
      setMessageStatus('Message sent successfully!');
    })
    .catch((error) => {
      console.log(error.text);
      setMessageStatus('Failed to send message, please try again.');
    });

    e.target.reset(); // Reset form after submission
  };

  return (
    <div className="background">
      <div className="contact-container">
        <h2 className="contact-header">Contact Me</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
        <p>{messageStatus}</p> {/* Message status display */}
      </div>
    </div>
  );
};

export default Contact;
