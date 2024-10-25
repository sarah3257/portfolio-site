import React from 'react';


const Net_project = () => {

  return (
  

    <div className="compression-container">
    <div className="compression-content">
      {/* כפתור קישור ל-GitHub */}
      <a
        href="https://github.com/sarah3257/project--JobMediate-"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        View Code on GitHub
      </a>

       {/* תיאור הפרויקט */}
<div className="project-description">
 <p><strong>NET Core Project | Software Engineers Integration Website</strong></p>
 <ul>
    <li>Developed a complex website for integrating software engineers at work using C# and .NET Core.</li>
    <li>Divided into three sections:</li>
    <ul>
        <li>Projects – View, add, update, and delete projects.</li>
        <li>Achievements – Manage education certificates and achievements with options for adding, updating, and deleting.</li>
        <li>Offices – Manage office lists with similar functionality.</li>
    </ul>
    <li>Organized into three layers:</li>
    <ul>
        <li>Software_Engineer.Core</li>
        <li>Software_Engineer.Data</li>
        <li>Software_Engineer.Service</li>
    </ul>
   
 </ul>
</div>

{/* גלריית תמונות */}
<div className="project-gallery">
 <div className="gallery-grid">
   { <img src={require('../assets/Net_core1.png')} alt="Gallery Image 1" className="gallery-img" />  }
   { <img src={require('../assets/Net_core2.png')} alt="Gallery Image 1" className="gallery-img" />  }
   </div>
</div>


</div>
</div>



  );
};

export default Net_project;
