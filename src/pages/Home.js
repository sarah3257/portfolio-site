import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import buttonProjectImage from  '../assets/button_project.png'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
      <h1 className="size-font-Sarah">  Sarah Rom </h1>
        <p className="software">software Developer</p>
        <div className="contact-info">
        <h4>📞 Phone: 053-313-4632</h4>
        <h4>📧 Email: <a href="mailto:sarirom@gmail.com">sarirom@gmail.com</a></h4>
      </div>
        {/* כפתור שמעביר לעמוד הפרויקטים */}
        <Link to="/projects">
        <img src={buttonProjectImage} alt="Project Button" className="project-button" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
