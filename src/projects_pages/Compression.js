import React from 'react';
import './Compression.css';

const Compression = () => {
  return (
    <div className="compression-container">
      
      {/* תמונה של Compression בצד שמאל, ממוקמת יותר למטה */}
      {/* <div className="compression-sidebar"> */}
        {/* <img src={require('../assets/Compression.png')} alt="Compression Project Thumbnail" className="thumbnail" /> */}
      {/* </div> */}

      {/* תוכן העמוד */}
      <div className="compression-content">
        {/* תמונה של התעודה בצד ימין */}
        <div className="certificate-section">
          <img src={require('../assets/certificate.png')} alt="Certificate" className="certificate-img" />
        </div>

        {/* קישורים למסמכים: Design ו-Presentation */}
        <div className="project-links">
          <img src={require('../assets/Design.png')} alt="Design" className="project-link-img" onClick={() => window.location.href='/projects_pages/Design'} />
          <img src={require('../assets/presentation.png')} alt="Presentation" className="project-link-img" onClick={() => window.location.href='/projects_pages/Presentation'} />
        </div>

        {/* כפתור קישור ל-GitHub */}
        <a
          href="https://github.com/sarah3257/compress-decompress/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          View Code on GitHub
        </a>

        {/* תיאור הפרויקט */}
        <div className="project-description">
          <p><strong>2024 | Bootcamp sponsored by Western Digital | Compression Project</strong></p>
          <ul>
            <li>Developed software for compressing files and folders using C++.</li>
            <li>Conducted research and wrote a comprehensive Design document.</li>
            <li>Worked closely with a mentor having 15 years of experience at Western Digital.</li>
            <li>Utilized technologies such as Git for version control, Google Test for unit testing, and ClickUp for tasks.</li>
            <li>Designed and built a graphical user interface (GUI) in C++.</li>
          </ul>
        </div>

        {/* גלריית תמונות */}
        <div className="project-gallery">
          <div className="gallery-grid">
            {<img src={require('../assets/Compress project.png')} alt="Gallery Image 1" className="gallery-img" /> }
            {<img src={require('../assets/User mode – compress.png')} alt="Gallery Image 2" className="gallery-img" /> }

            {<img src={require('../assets/User mode – uploading file.png')} alt="Gallery Image 3" className="gallery-img" /> }
            {<img src={require('../assets/User mode – uploading folder.png')} alt="Gallery Image 3" className="gallery-img" /> }
           
            {<img src={require('../assets/Programmer mode- open.png')} alt="Gallery Image 3" className="gallery-img" /> }
            {<img src={require('../assets/Programmer mode.png')} alt="Gallery Image 3" className="gallery-img" /> }

            {<img src={require('../assets/Programmer mode - Meddip graphs2.png')} alt="Gallery Image 3" className="gallery-img" /> }
            {<img src={require('../assets/Programmer mode - Meddip graphs1.png')} alt="Gallery Image 3" className="gallery-img" /> }

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Compression;
