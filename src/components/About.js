import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          My journey into coding is fueled by an unyielding passion and an insatiable curiosity. Without the traditional university path, I forged my own way through relentless self-learning, hands-on experimentation, and crafting meaningful projects that truly reflect my dedication and creativity.
        </p>
        <p>
          I believe that genuine talent and determination come from the heart, and I pour that spirit into every line of code I write. My mission is to create elegant, efficient, and user-centric solutions that not only solve problems but also inspire and delight.
        </p>
        <p>
          Eager to collaborate, innovate, and grow, I am committed to delivering exceptional value to clients and teams through creativity, perseverance, and a deep love for technology.
        </p>
        <div className="skills">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" alt="HTML5" className="skill-icon" />
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" alt="CSS3" className="skill-icon" />
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" alt="JavaScript" className="skill-icon" />
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" alt="React" className="skill-icon" />
          <img src="/images/Java.png" alt="Java" className="skill-icon" />
        </div>
      </div>
    </section>
  );
};

export default About;
