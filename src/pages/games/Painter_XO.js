import React from 'react';
import './games.css';


const Painter_XO = () => {

  return (
    
    <div className="compression-container">
    <div className="compression-content">
      {/* כפתור קישור ל-GitHub */}
      <a
        href="https://github.com/sarah3257/XO_game"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        View Code -XO_game on GitHub
      </a>


  {/* כפתור קישור ל-GitHub */}
  <a
    href="https://github.com/sarah3257/Painter-game"
    target="_blank"
    rel="noopener noreferrer"
    className="github-button"
  >
    View Code - Painter game on GitHub
  </a>

       {/* תיאור הפרויקט */}
<div className="project-description">
 <p><strong>painter game & XO game   </strong></p>
</div>

{/* גלריית תמונות */}
<div className="project-gallery">
 <div className="gallery-grid">
   {<img src={require('../../assets/games/Painter-game1.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../../assets/games/Painter-game2.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../../assets/games/XO_game.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../../assets/games/XO_game2.png')} alt="Gallery Image 1" className="gallery-img" /> }
   </div>
</div>


</div>
</div>
  );
};

export default Painter_XO;
