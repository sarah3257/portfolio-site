import React from 'react';
import './General_education.css'; // עיצוב לדף הכללי של ההשכלה

const Bootcamp = () => {
  return (
    <div className="education-container2">
    <div className="education-header">
      <h1>2024 | Bootcamp sponsored by Western Digital </h1>
    </div>
    
    <div className="education-content">
      {/* תמונה מימין */}
    
        <img src={require('../assets/certificate.png')} alt="School Certificate" className="certificate-image" />
     
      {/* תיאור משמאל */}
      <div className="education-description">
        <div className="project-section">
            <ul>
                <li><p>Developed software for compressing files and folders using C++.</p></li>
                <li><p>Conducted research and wrote a Design document.</p></li>
                <li><p>Teamwork and collaboration with a mentor with 15 years of experience at Western Digital.</p></li>
                <li><p>Utilized technologies : Git for version control, Google Test library for unit testing, and ClickUp for task management.</p></li>
                <li><p>Wrote code and created a graphical user interface (GUI) using C++.</p></li>
            </ul>
          <div className="project-btn">
            <a href="./Compression">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}

export default Bootcamp;