import React from 'react';
import './Compression.css';

const Games_project = () => {
  return (
    <div >
      

      {/* תוכן העמוד */}
      <div className="compression-content">
 {/* תיאור הפרויקט */}
 <div className="project-description">
   <p><strong>Development of a variety of games</strong></p>
   <ul>
     <li>such as: "Guess Who", "The Memory Game" etc...,</li>
     <li>using: Html, Java Script, CSS.</li>
     
   </ul>
 </div>
        {/* קישורים למסמכים: Design ו-Presentation */}
        <div className="project-gallery">
        <div className="gallery-grid">
          <img src={require('../assets/games/game1.png')}alt="Gallery Image 1" className="gallery-img-game"  onClick={() => window.location.href='/pages/games/Guess_who'} />
          <img src={require('../assets/games/game2.png')}alt="Gallery Image 2" className="gallery-img-game"  onClick={() => window.location.href='/pages/games/Travel_site'} />
          <img src={require('../assets/games/game3.png')}alt="Gallery Image 3" className="gallery-img-game"  onClick={() => window.location.href='/pages/games/Painter_XO'} />
          <img src={require('../assets/games/game4.png')}alt="Gallery Image 4" className="gallery-img-game"  onClick={() => window.location.href='/pages/games/Memory_game'} />
        </div>
        </div>


      </div>
    </div>
  );
};

export default Games_project;
