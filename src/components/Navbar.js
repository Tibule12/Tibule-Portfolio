import React, { useState } from 'react';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">Thulani Mtshwelo</div>
      <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setMenuActive(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuActive(false)}>About</a></li>
        <li><a href="#project" onClick={() => setMenuActive(false)}>Projects</a></li>
        <li><a href="#certificates" onClick={() => setMenuActive(false)}>Certificates</a></li>
        <li><a href="#contact" onClick={() => setMenuActive(false)}>Contact</a></li>
      </ul>
      <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleMenu(); }}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
