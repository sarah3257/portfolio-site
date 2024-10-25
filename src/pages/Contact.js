import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css';  // הקובץ CSS שכבר עיצבנו

const Contact = () => {
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID", // הכניסי את ה-Service ID שלך
      "YOUR_TEMPLATE_ID", // הכניסי את ה-Template ID שלך
      e.target,
      "YOUR_USER_ID" // הכניסי את ה-User ID שלך
    )
    .then((result) => {
      console.log(result.text);
      setMessageStatus('Message sent successfully!');
    })
    .catch((error) => {
      console.log(error.text);
      setMessageStatus('Failed to send message, please try again.');
    });

    e.target.reset(); // לאפס את הטופס לאחר שליחה
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
        <p>{messageStatus}</p>  {/* תצוגה של סטטוס ההודעה */}
      </div>
    </div>
  );
};

export default Contact;
