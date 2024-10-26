import React from 'react';
import './Police_project.css';

const Police_project = () => {
    const imagePaths = Array.from({ length: 18 }, (_, i) => require(`../assets/Police_project/police${i + 1}.png`));
  return (
    <div className="police-container">
      
     

      {/* תוכן העמוד */}
      <div className="police-content">
        {/* תמונה של התעודה בצד ימין */}
        <div className="certificate-section">
          <img src={require('../assets/Certificate_School.png')} alt="Certificate" className="certificate-img" />
        </div>

        {/* קישורים למסמכים: Design ו-Presentation */}
        <div className="project-links">
          <img src={require('../assets/project_book.png')} alt="project_book" className="project-link-img" onClick={() => window.location.href='/projects_pages/Book_police'} />
        </div>

        {/* כפתור קישור ל-GitHub */}
        <a
          href="https://github.com/sarah3257/Police-project---5-units"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          View Code on GitHub
        </a>

        {/* תיאור הפרויקט */}
        <div className="project-description">
          <p><strong>2021 | High School Final Project | Police Systems Management</strong></p>
          <ul>
            <li>Developed a management system for police operations: security, traffic, and emergency services.</li>
            <li>Built using C# with WINFORM technology and an ACCESS database.</li>
            <li>Received a score of 100 in the project for a 5-unit final exam.</li>
            <li>Created after in-depth research on police systems.</li>
         <li>Ranked 9th in the country in the computer science exam, with a personal score above average.</li>
          </ul>
        </div>

        {/* גלריית תמונות */}
        <div className="project-gallery-police">
          <div className="gallery-grid-police">
             
   {imagePaths.map((image, index) => (
    
    <img src={image}  alt="Gallery Image 1" className="gallery-img-police" />
    
   ))}
 

          </div>
        </div>
      </div>
    </div>
  );
};

export default Police_project