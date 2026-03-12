import React from 'react';
const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I am a full-stack developer focused on building scalable platforms and intelligent digital systems. My work spans both enterprise environments and independent product development, combining modern web technologies with practical system architecture.
        </p>
        <p>
          Currently, I work as a Full-Stack Developer at Fine Chemicals Corporation where I am developing an internal Integrity Hub for declaration and conflict-of-interest management. The system integrates with Azure Active Directory and Single Sign-On to support secure identity and enterprise workflows. I also contribute to internal solutions using SharePoint, Power Apps, and Power BI.
        </p>
        <p>
          Alongside my professional work, I am the founder and technical architect of AutoPromote, a content intelligence platform designed to help creators test and optimize content performance before scaling across platforms. The system integrates with platforms such as TikTok, YouTube, LinkedIn, Reddit, and Meta, combining analytics, experimentation, and AI-assisted improvements.
        </p>
        <p>
          My approach to software development focuses on building efficient, scalable systems that solve real problems. I enjoy working across the full stack, from designing backend architecture and APIs to building responsive user interfaces and optimizing infrastructure.
        </p>
        <div className="skills">
          <h3>Core Technologies</h3>
          <p>JavaScript • TypeScript • Python</p>
          <p>React • Next.js • Vue • Django</p>
          <p>Node.js • REST APIs</p>
          <p>PostgreSQL • Firebase • Supabase</p>
          <p>Azure AD • Power Apps • Power BI</p>
        </div>
      </div>
    </section>
  );
};

export default About;
