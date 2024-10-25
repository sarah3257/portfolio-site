import React from 'react';
 import './games.css';

const Memory_game = () => {

  return (
  
    <div className="compression-container">
    <div className="compression-content">
      {/* כפתור קישור ל-GitHub */}
      <a
        href="https://github.com/sarah3257/MemoryGame2"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        View Code on GitHub
      </a>

       {/* תיאור הפרויקט */}
<div className="project-description">
 <p><strong>Memory game</strong></p>
</div>

{/* גלריית תמונות */}
<div className="project-gallery">
 <div className="gallery-grid">
   {<img src={require('../../assets/games/Memory1.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../../assets/games/Memory2.png')} alt="Gallery Image 1" className="gallery-img" /> }
   </div>
</div>


</div>
</div>




  );
};

export default Memory_game;
