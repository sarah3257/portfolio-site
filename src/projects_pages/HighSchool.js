import React from 'react';
import './General_education.css'; // עיצוב לדף הכללי של ההשכלה

const HighSchool = () => {
  return (
    <div className="education-container2">
      <div className="education-header">
        <h1>2019 - 2022 | Software Engineering & Cyber Studies </h1>
        <p>Certified in Software Engineering & Cyber Security by the Ministry of Education</p>
      </div>
      
      <div className="education-content">
        {/* תמונה מימין */}
        <div className="certificate-img">
          <img src={require('../assets/Certificate_School.png')} alt="School Certificate" />
        </div>

        {/* תיאור משמאל */}
        <div className="education-description">
          <div className="exam-section">
            <h2>Bagrut Exam</h2>
            <p>
              I began my journey in high-tech at the age of 15, focusing on Software Engineering and Cyber Security. Throughout my studies, I achieved impressive grades, particularly in the Computer Science Bagrut exam, where our group average ranked ninth in the country. I succeeded in surpassing the average score, highlighting my academic and practical skills in the field.
            </p>
          </div>

          <div className="project-section">
            <h2>Project</h2>
            <p>
              Subsequently, I developed a comprehensive project in C# as part of my curriculum, which accounts for 5 units of Bagrut. I received a perfect score of 100 for this project, demonstrating the quality and dedication I invested in my work.
            </p>
            <div className="project-btn">
              <a href="./Police_project">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighSchool;
