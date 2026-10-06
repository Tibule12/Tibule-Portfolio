import React from 'react';

const Projects = () => {
  return (
    <section id="project" className="section projects-section">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">A showcase of my latest and proudest work</p>
      <div className="portfolio-grid beautiful-grid">
        <div className="portfolio-item beautiful-card">
          <a href="https://khayelitsha-youth-choir.web.app/" target="_blank" rel="noopener noreferrer">
            <div className="project-image-wrapper">
              <img src="/images/placeholder.jpg" alt="Khayelitsha Youth Choir" className="project-image" />
            </div>
            <div className="overlay beautiful-overlay">
              <h3>Khayelitsha Youth Choir</h3>
              <p>Community Choir Website</p>
            </div>
          </a>
        </div>
        <div className="portfolio-item beautiful-card">
          <a href="https://paul455565.github.io/TheFiveGuys/" target="_blank" rel="noopener noreferrer">
            <div className="project-image-wrapper">
              <img src="/images/placeholder.jpg" alt="The Five Guys" className="project-image" />
            </div>
            <div className="overlay beautiful-overlay">
              <h3>The Five Guys</h3>
              <p>CPUT Website</p>
            </div>
          </a>
        </div>
        <div className="portfolio-item beautiful-card">
          <a href="https://aidan2125.github.io/Backend-testing/" target="_blank" rel="noopener noreferrer">
            <div className="project-image-wrapper">
              <img src="/images/placeholder.jpg" alt="Dev Squad" className="project-image" />
            </div>
            <div className="overlay beautiful-overlay">
              <h3>Dev Squad</h3>
              <p>Travique Website</p>
            </div>
          </a>
        </div>
        <div className="portfolio-item beautiful-card">
          <a href="https://autopromote.org" target="_blank" rel="noopener noreferrer">
            <div className="project-image-wrapper">
              <img src="/images/placeholder.jpg" alt="AutoPromote" className="project-image" />
            </div>
            <div className="overlay beautiful-overlay">
              <h3>AutoPromote</h3>
              <p>Content intelligence platform</p>
            </div>
          </a>
        </div>
        <div className="portfolio-item beautiful-card">
          <a href="https://capacitiplacementportal.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="project-image-wrapper">
              <img src="/images/placeholder.jpg" alt="Capaciti Placement Portal" className="project-image" />
            </div>
            <div className="overlay beautiful-overlay">
              <h3>Capaciti Placement Portal</h3>
              <p>Placement Portal Website</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
