import React from 'react';

const Home = () => {
  return (
    <section id="home" className="section">
      <div className="home-content">
        <h1>Thulani Mtshwelo</h1>
        <p className="subtitle">Full Stack Software Developer</p>
        <p>I craft beautiful, functional websites that make an impact.</p>
        <a href="#project" className="cta-button">See My Work</a>
      </div>
      <img src="images/Thulani Mtshwelo.jpeg" alt="Profile" className="profile-pic" />
    </section>
  );
};

export default Home;
