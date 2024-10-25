import React from 'react';

 import './games.css';

const Travel_site = () => {

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
 <p><strong>Travel site</strong></p>
 <ul>
  <li>Developed Travel site in JavaScript</li>
  <li>Developed a travel guide website divided into three sections:</li>
    <ul>
     <li>Streams</li>  <li>Attractions</li> <li>Cabins</li>
    </ul>
  <li>Provides detailed information on each category.</li> 
  <li>Includes a sign-up feature for users to receive discount coupons.</li>
 </ul>
</div>

{/* גלריית תמונות */}
<div className="project-gallery">
 <div className="gallery-grid">
   {<img src={require('../../assets/games/Travel_site/Travel1.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../../assets/games/Travel_site/Travel2.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../../assets/games/Travel_site/Travel3.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../../assets/games/Travel_site/Travel4.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../../assets/games/Travel_site/Travel5.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../../assets/games/Travel_site/Travel6.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../../assets/games/Travel_site/Travel7.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../../assets/games/Travel_site/Travel8.png')} alt="Gallery Image 1" className="gallery-img" /> }
   </div>
</div>


</div>
</div>
  );
};

export default Travel_site;
