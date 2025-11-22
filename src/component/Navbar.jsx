import React from 'react';
import './Navbar.css';
import Logo from '../assets/taringa_4494603.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src={Logo} alt="Softcode Logo" className="logo-img" />
      <p>KidoTech</p>
    </div>
    <ul className="nav-links">
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
