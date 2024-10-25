import React from 'react';
import './Education.css'; // ניצור סגנונות מותאמים אישית בקובץ CSS
import highSchoolImg from '../assets/high_school.png'; // תחליפי את השם לשם הקובץ הנכון
import gradeSheetImg from '../assets/grade_sheet.png'; // תחליפי את השם לשם הקובץ הנכון
import bootcampImg from '../assets/bootcamp.png'; // תחליפי את השם לשם הקובץ הנכון
const Education = () => {
  return (
    <div className="education-container">
      <h1>My Education</h1>
      <div className="education-items-container">
      <div className="education-item">
        <img src={highSchoolImg} alt="High School Diploma" className="education-image" onClick={() => window.location.href='../projects_pages/HighSchool'} />

      </div>

      <div className="education-item">
        <img src={gradeSheetImg} alt="Grade Sheet" className="education-image"onClick={() => window.location.href='../projects_pages/SE_Studies'}  />
      </div>

      <div className="education-item">
        <img src={bootcampImg} alt="Bootcamp Certificate" className="education-image" onClick={() => window.location.href='../projects_pages/Bootcamp'}/>
      </div>
      </div>
    </div>
  );
};

export default Education;
