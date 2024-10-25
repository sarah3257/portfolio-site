import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // קובץ CSS לעיצוב

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-header">My Projects</h1>
      <div className="projects-grid">
        {/* פרויקט דחיסת נתונים */}
        <Link to="/projects_pages/Compression" className="project-card">
          <img src={require('../assets/Compression.png')} alt="Compression Project" />
          <h2>Compression Project</h2>
        </Link>

        {/* פרויקט מערכת משטרתית */}
        <Link to="/projects_pages/Police_project" className="project-card">
          <img src={require('../assets/police.png')} alt="Police Management Project" />
          <h2>Police Management Project</h2>
        </Link>

        {/* פרויקטים של משחקים */}
        <Link to="/projects_pages/Games_project" className="project-card">
          <img src={require('../assets/games.png')} alt="Games Project" />
          <h2>Games Project</h2>
        </Link>

        {/* פרויקט ב-.NET CORE */}
        <Link to="/projects_pages/Net_project" className="project-card">
          <img src={require('../assets/NET_CORE.png')} alt=".NET CORE Project" />
          <h2>NET CORE Project</h2>
        </Link>

        {/* פרויקט אתר איפור */}
        <Link to="/projects_pages/Makeup_site" className="project-card">
          <img src={require('../assets/makeup_site.png')} alt="Makeup Site Project" />
          <h2>Makeup Site Project</h2>
        </Link>


        
             {/* פרויקט במודל MVC */}
        <Link to="/projects_pages/MVC_java" className="project-card">
          <img src={require('../assets/MVC-mode.png')} alt="MVC Model Project" />
          <h2>MVC Model Project</h2>
        </Link>

      </div>
    </div>
  );
};

export default Projects;
