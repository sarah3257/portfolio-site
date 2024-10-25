import React from 'react';


const MVC_java = () => {

  return (
    <div className="compression-container">
    <div className="compression-content">
      {/* כפתור קישור ל-GitHub */}
      <a
        href="https://github.com/sarah3257/MVC-model-/tree/main"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        View Code on GitHub
      </a>

       {/* תיאור הפרויקט */}
<div className="project-description">
 <p><strong>Store Management System</strong></p>
 <ul>
    <li>Developed a comprehensive store management system in Java, following the MVC design pattern.</li>
    <li>The system includes:</li>
    <ul>
        <li>Customer Management: Manage customer data.</li>
        <li>Product Management: Manage product listings.</li>
        <li>Order Management: Handle and track orders, with full order processing functionality.</li>
        <li>Order Viewing: View detailed order histories and statuses.</li>
    </ul>
 </ul>
</div>

{/* גלריית תמונות */}
<div className="project-gallery">
 <div className="gallery-grid">
   {<img src={require('../assets/java_image/java1.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../assets/java_image/java2.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../assets/java_image/java3.png')} alt="Gallery Image 1" className="gallery-img" /> }
   {<img src={require('../assets/java_image/java4.png')} alt="Gallery Image 1" className="gallery-img" /> }

   </div>
</div>


</div>
</div>


);
};

export default MVC_java;
