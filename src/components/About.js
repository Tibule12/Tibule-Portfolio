import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <p>Passionate developer with 1+ years in web technologies and design. Specializing in HTML, CSS, JavaScript, and modern frameworks.</p>
        <div className="skills">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" alt="HTML5" className="skill-icon" />
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" alt="CSS3" className="skill-icon" />
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" alt="JavaScript" className="skill-icon" />
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" alt="React" className="skill-icon" />
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/java.svg" alt="Java" className="skill-icon" />
        </div>
      </div>
    </section>
  );
};

export default About;
