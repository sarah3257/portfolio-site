import React from 'react';


import '../../projects_pages/Compression.css'
const Guess_who = () => {

  return (

      <div className="compression-container">
      <div className="compression-content">
        {/* כפתור קישור ל-GitHub */}
        <a
          href="https://github.com/sarah3257/Game-guess-who"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          View Code on GitHub
        </a>

         {/* תיאור הפרויקט */}
 <div className="project-description">
   <p><strong>Guess Who Game</strong></p>
   <ul>
     <li><h4>Developed an interactive "Guess Who" game in JavaScript.</h4></li>
     <li><h4>Game features three difficulty levels:</h4></li>
     <ul>
      <li>Easy:   5 minutes, 7 lives</li>
      <li>Medium: 3 minutes, 5 lives</li>
      <li>Hard:   2 minutes, 4 lives</li>
     </ul>
     <li><h4>Players can select background music from the menu.</h4></li>
     <li><h4>Options to save the game progress and load previous games.</h4></li>
   </ul>
 </div>

 {/* גלריית תמונות */}
 <div className="project-gallery">
   <div className="gallery-grid">
     {<img src={require('../../assets/games/guess/guess1.png')} alt="Gallery Image 1" className="gallery-img" /> }
     {<img src={require('../../assets/games/guess/guess2.png')} alt="Gallery Image 1" className="gallery-img" /> }
     {<img src={require('../../assets/games/guess/guess3.png')} alt="Gallery Image 1" className="gallery-img" /> }
     {<img src={require('../../assets/games/guess/guess4.png')} alt="Gallery Image 1" className="gallery-img" /> }
     </div>
  </div>


  </div>
  </div>
 

  );
};

export default Guess_who;
