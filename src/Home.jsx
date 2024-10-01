import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-circle"></span>
        <span>Lakshmi Narayana Manikanta Chalasani</span>
        <p className="branch">Electronics and Communication Engineering</p>
      </div>
      <button className="nav-toggle" onClick={toggleNav}>
        ☰
      </button>
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
          <li><Link to="/education" onClick={() => setIsNavOpen(false)}>Education</Link></li>
          <li><Link to="/skills" onClick={() => setIsNavOpen(false)}>Skills</Link></li>
          <li><Link to="/project" onClick={() => setIsNavOpen(false)}>Projects</Link></li>
          <li><Link to="/resume" onClick={() => setIsNavOpen(false)}>Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Home;
