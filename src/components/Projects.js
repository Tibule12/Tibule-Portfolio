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
          <a href="https://tibule12.github.io/Task-Management/" target="_blank" rel="noopener noreferrer">
            <div className="project-image-wrapper">
              <img src="/images/placeholder.jpg" alt="Task Management" className="project-image" />
            </div>
            <div className="overlay beautiful-overlay">
              <h3>Task Management</h3>
              <p>Task Management Website</p>
            </div>
          </a>
        </div>
        <div className="portfolio-item beautiful-card">
  <a href="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Feu-de.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-9acfeebf-6bf1-4a64-8617-576deb5d5976%3A%3A84d95260-2985-4226-a9c6-266a2bbe5ae7&integrationID=b6ceec8a-0b55-4e4a-8dba-60d10b13cae3&region=eu-de&serviceInstanceID=9acfeebf-6bf1-4a64-8617-576deb5d5976" 
     target="_blank" rel="noopener noreferrer">
    <div className="project-image-wrapper">
      <img src="/images/placeholder.jpg" alt="watsonx Assistant Preview" className="project-image" />
    </div>
    <div className="overlay beautiful-overlay">
      <h3>watsonx Assistant Preview</h3>
      <p>AI-powered chatbot experience</p>
    </div>
  </a>
</div>
      </div>
    </section>
  );
};

export default Projects;
