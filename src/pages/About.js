import React from 'react';
import './About.css'; // אל תשכחי להוסיף קובץ CSS לעיצוב

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">Hi, I'm Sarah</h1>
      <p className="about-text">
        <strong>Since a young age, I have aspired to pursue a career in the high-tech industry.</strong> I demonstrated a strong aptitude for mathematics and embarked on my journey into software engineering and cyber technology at the age of 15, focusing on system design and programming. I successfully completed my high school diploma in computer science, during which I undertook a final project in C# centered on police systems, revealing my passion for programming and development.
      </p>
      <p className="about-text">
        At the age of 18, I advanced my studies in software engineering with a specialization in advanced chip technologies. Throughout my educational journey, I engaged in innovative projects related to chip technology and Full Stack development.
      </p>
      <p className="about-text">
        <strong>I consistently excelled academically, achieving exceptional grades.</strong> As part of my higher education experience, I participated in a program organized by KamaTech, where I successfully completed examinations in mathematics, algorithms, and data structures, leading to my acceptance into the Embedded group bootcamp. There, I gained comprehensive knowledge in algorithmics, data structures, and graph theory. During several weeks of intensive study, I developed an extensive game project in C++, inspired by the well-known game "Catan."
      </p>
      <p className="about-text">
        I completed an internship at Western Digital, where I received training from a mentor on a significant project that greatly contributed to my professional development. <strong>I take pride in the journey I have undertaken and the skills I have acquired, and I remain committed to pursuing my aspirations within the high-tech field.</strong> For me, the sky is the limit.
      </p>
    </div>
  );
};

export default About;
