import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar">
  

      <ul>
     
        <li><Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li><Link to="/projects">Projects</Link></li>
        <li> <Link to="/contact">Contact</Link></li>
        <li> <Link to="/education">Education</Link></li>
      </ul>
      <img src={logo} alt="Logo" className="logo" />
    </nav>
  );
};

export default Navbar;
