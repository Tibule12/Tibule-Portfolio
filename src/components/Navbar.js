import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Thulani Mtshwelo</div>
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
