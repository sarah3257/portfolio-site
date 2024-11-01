import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Compression from './projects_pages/Compression';
import Design from './projects_pages/Design'
import Presentation from './projects_pages/Presentation'
import Police_project from './projects_pages/Police_project'
import Games_project from './projects_pages/Games_project'
import Guess_who from './pages/games/Guess_who'
import Memory_game from './pages/games/Memory_game'
import Painter_XO from './pages/games/Painter_XO'
import Travel_site from './pages/games/Travel_site'
import Net_project from './projects_pages/Net_project'
import Makeup_site from './projects_pages/Makeup_site'
import MVC_java from './projects_pages/MVC_java'
import HighSchool from './projects_pages/HighSchool'
import SE_Studies from './projects_pages/SE_Studies'
import Bootcamp from './projects_pages/Bootcamp'
import Book_police from './projects_pages/Book_police'
import Footer from './pages/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/" element={<Projects />} />
          <Route path="/projects_pages/Compression" element={<Compression />} />
          <Route path="/projects_pages/Makeup_site" element={<Makeup_site/>} />
          <Route path="/projects_pages/Design" element={<Design/>} />
          <Route path="/projects_pages/Presentation" element={<Presentation/>} />
          <Route path="/projects_pages/Police_project" element={<Police_project/>} />
          <Route path="/projects_pages/Games_project" element={<Games_project/>} />
          <Route path="/projects_pages/Net_project" element={<Net_project/>} />
          <Route path="/projects_pages/MVC_java" element={<MVC_java/>} />

          <Route path="/pages/games/Guess_who" element={<Guess_who/>} />
          <Route path="/pages/games/Memory_game" element={<Memory_game/>} />
          <Route path="/pages/games/Painter_XO" element={<Painter_XO/>} />
          <Route path="/pages/games/Travel_site" element={<Travel_site/>} />

          <Route path="/projects_pages/HighSchool" element={<HighSchool/>} />
          <Route path="/projects_pages/SE_Studies" element={<SE_Studies/>} />
          <Route path="/projects_pages/Bootcamp" element={<Bootcamp/>} />

          <Route path="/projects_pages/Book_police" element={<Book_police/>} />


        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
