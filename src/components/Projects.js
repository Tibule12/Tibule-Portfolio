import React from 'react';

const Projects = () => {
  return (
    <section id="project" className="section">
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <a href="https://khayelitsha-youth-choir.web.app/" target="_blank" rel="noopener noreferrer">
            <img src="/images/placeholder.jpg" alt="Khayelitsha Youth Choir" />
            <div className="overlay">
              <h3>Khayelitsha Youth Choir</h3>
              <p>Community Choir Website</p>
            </div>
          </a>
        </div>
        <div className="portfolio-item">
          <a href="https://paul455565.github.io/TheFiveGuys/" target="_blank" rel="noopener noreferrer">
            <img src="/images/placeholder.jpg" alt="The Five Guys" />
            <div className="overlay">
              <h3>The Five Guys</h3>
              <p>Restaurant Website</p>
            </div>
          </a>
        </div>
        <div className="portfolio-item">
          <a href="https://aidan2125.github.io/Backend-testing/" target="_blank" rel="noopener noreferrer">
            <img src="/images/placeholder.jpg" alt="Dev Squad" />
            <div className="overlay">
              <h3>Dev Squad</h3>
              <p>Project Link</p>
            </div>
          </a>
        </div>
        <div className="portfolio-item">
          <a href="https://tibule12.github.io/Task-Management/" target="_blank" rel="noopener noreferrer">
            <img src="/images/placeholder.jpg" alt="Task Management" />
            <div className="overlay">
              <h3>Task Management</h3>
              <p>Task Management Project</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
