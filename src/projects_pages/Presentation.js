import React from 'react';
import './Presentation.css'; // נניח שנוסיף עיצוב לקובץ נפרד

const presentation = () => {
  // מערך שמכיל את כל שמות התמונות
  const imagePaths = Array.from({ length: 19 }, (_, i) => require(`../assets/Presentation/Presentation${i + 1}.png`));

  return (
    <div className="presentation-gallery">
      {imagePaths.map((image, index) => (
        <div key={index} className="presentation-image-container">
          <img src={image} alt={`presentation page ${index + 1}`} className="presentation-image" />
        </div>
      ))}
    </div>
  );
};

export default presentation;
