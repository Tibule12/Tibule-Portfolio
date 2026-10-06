import React from 'react';

const Projects = () => {
  return (
    <section id="project" className="section projects-section">
      <h2 className="projects-title">Selected Engineering Work</h2>
      <p className="projects-subtitle">A mix of enterprise delivery, independent product development and earlier web projects.</p>
      <div className="portfolio-grid beautiful-grid">
        <div className="portfolio-item beautiful-card">
          <a href="https://autopromote.org" target="_blank" rel="noopener noreferrer">
            <div className="project-image-wrapper">
              <img src="/images/placeholder.jpg" alt="AutoPromote" className="project-image" />
            </div>
            <div className="overlay beautiful-overlay">
              <h3>AutoPromote</h3>
              <p>Founder & Technical Architect — automated multi-camera editing, media analysis, AI-assisted workflows, publishing integrations and cloud processing.</p>
            </div>
          </a>
        </div>

        <div className="portfolio-item beautiful-card">
          <div className="project-image-wrapper">
            <img src="/images/placeholder.jpg" alt="Aspen Integrity Hub" className="project-image" />
          </div>
          <div className="overlay beautiful-overlay">
            <h3>Aspen Integrity Hub</h3>
            <p>Enterprise conflict-of-interest declaration platform. Sole developer across frontend, backend, data workflows, Entra ID / SSO and internal reporting. Confidential enterprise code is not public.</p>
          </div>
        </div>

        <div className="portfolio-item beautiful-card">
          <div className="project-image-wrapper">
            <img src="/images/placeholder.jpg" alt="Enterprise Applications" className="project-image" />
          </div>
          <div className="overlay beautiful-overlay">
            <h3>Enterprise Applications & Support</h3>
            <p>SharePoint, Power Apps, Power Automate and Power BI solutions, plus Veeva PromoMats and Veeva QDocs application support across the Aspen environment.</p>
          </div>
        </div>

        <div className="portfolio-item beautiful-card">
          <a href="https://capacitiplacementportal.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="project-image-wrapper">
              <img src="/images/placeholder.jpg" alt="Capaciti Placement Portal" className="project-image" />
            </div>
            <div className="overlay beautiful-overlay">
              <h3>CAPACITI Placement Portal</h3>
              <p>Web application built to support learner and placement workflows.</p>
            </div>
          </a>
        </div>

        <div className="portfolio-item beautiful-card">
          <a href="https://khayelitsha-youth-choir.web.app/" target="_blank" rel="noopener noreferrer">
            <div className="project-image-wrapper">
              <img src="/images/placeholder.jpg" alt="Khayelitsha Youth Choir" className="project-image" />
            </div>
            <div className="overlay beautiful-overlay">
              <h3>Khayelitsha Youth Choir</h3>
              <p>Community-focused website created to improve the choir's digital presence.</p>
            </div>
          </a>
        </div>

        <div className="portfolio-item beautiful-card">
          <a href="https://tibule12.github.io/Task-Management/" target="_blank" rel="noopener noreferrer">
            <div className="project-image-wrapper">
              <img src="/images/placeholder.jpg" alt="Task Management" className="project-image" />
            </div>
            <div className="overlay beautiful-overlay">
              <h3>Task Management</h3>
              <p>Earlier full-stack learning project focused on task and workflow organisation.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
