import React from 'react';
import './General_education.css'; // עיצוב לדף הכללי של ההשכלה

const SE_Studies = () => {
  return (
    <div className="education-container2">
    <div className="education-header">
      <h1>2022 – 2024| Software Engineering Studies </h1>
    </div>
    
    <div className="education-content">
      {/* תמונה מימין */}
      <div className="certificate-img">
        <img src={require('../assets/grade_sheet2.png')} alt="School Certificate" />
      </div>
      {/* תיאור משמאל */}
      <div className="education-description">
        <div className="exam-section">
          
          <p>
         I hold an engineering degree from the College of Management (MAHAT).
         I studied Frontend, Backend, and Embedded systems.
         I participated in advanced KamaTech courses, where I achieved high scores in algorithm and data structure exams.
          </p>
          
        </div>
        <div className="project-section">
          <h2>Subjects Studied:</h2>
          <ul>
            <li><p>Software Languages: C#, Java, Python, Node.js, C, C++, Assembly</p></li>
            <li><p>Web Development: HTML, JavaScript, CSS, React</p></li>
            <li><p>Databases: Access, SQL</p></li>
            <li><p>Operating Systems: Linux, Windows</p></li>
            <li><p>In-depth Knowledge and Additional Courses: Communication and Cybersecurity, Embedded Systems, Computer Organization, Numerical Systems</p></li>
          </ul>
         
         
        
        </div>
      </div>
    </div>
  </div>
    );
}

export default SE_Studies;