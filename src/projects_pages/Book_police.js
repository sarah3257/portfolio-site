import React from 'react';
import './Design.css'; // נניח שנוסיף עיצוב לקובץ נפרד

const Book_police = () => {
  // מערך שמכיל את כל שמות התמונות
  const imagePaths = Array.from({ length: 19 }, (_, i) => require(`../assets/Police-Book/${i + 1}.png`));

  return (
    <div className="design-gallery">
      {imagePaths.map((image, index) => (
        <div key={index} className="design-image-container">
          <img src={image} alt={`Design page ${index + 1}`} className="design-image" />
        </div>
      ))}
    </div>
  );
};

export default Book_police;
