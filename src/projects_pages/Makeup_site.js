import React from 'react';


const Makeup_site = () => {

  return (
  
  
  
    <div className="compression-container">
    <div className="compression-content">
      {/* כפתור קישור ל-GitHub */}
      <a
        href="https://github.com/sarah3257/Final-package-react"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        View Code on GitHub
      </a>

       {/* תיאור הפרויקט */}
<div className="project-description">
 <p><strong>Makeup Products Shopping Site</strong></p>
 <ul>
   <li>Developed a shopping website for makeup products using React with a backend server.</li>
   <li>Includes both client and admin sides:</li>
   <ul>
    <li>Client: User registration/login, product browsing, filtering, and searching, shopping cart, and order management.</li>
    <li>Admin: Manage products (add/update/delete), users, and orders.</li>
   </ul>

 </ul>
</div>

{/* גלריית תמונות */}
<div className="project-gallery">
 <div className="gallery-grid">
   {<img src={require('../assets/makeup/1.jpg')} alt="Gallery Image 1" className="gallery-img" />}
   {<img src={require('../assets/makeup/2.jpg')} alt="Gallery Image 1" className="gallery-img" />}
   {<img src={require('../assets/makeup/3.jpg')} alt="Gallery Image 1" className="gallery-img" />}
   {<img src={require('../assets/makeup/4.jpg')} alt="Gallery Image 1" className="gallery-img" />}
   {<img src={require('../assets/makeup/5.jpg')} alt="Gallery Image 1" className="gallery-img" />}
   {<img src={require('../assets/makeup/6.jpg')} alt="Gallery Image 1" className="gallery-img" />}
   {<img src={require('../assets/makeup/7.jpg')} alt="Gallery Image 1" className="gallery-img" />}
   {<img src={require('../assets/makeup/8.jpg')} alt="Gallery Image 1" className="gallery-img" />}
   {<img src={require('../assets/makeup/9.jpg')} alt="Gallery Image 1" className="gallery-img" />}
   {<img src={require('../assets/makeup/10.jpg')} alt="Gallery Image 1" className="gallery-img" />}
   {<img src={require('../assets/makeup/11.jpg')} alt="Gallery Image 1" className="gallery-img" />}
   </div>
</div>


</div>
</div>



);
};

export default Makeup_site;
