import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I am a software engineer and full-stack platform builder focused on enterprise systems, cloud-backed applications, API integrations and AI-assisted media workflows.
        </p>
        <p>
          I currently deliver enterprise software for Aspen Pharmacare Holdings Limited through Fine Chemicals Corporation (FCC), an Aspen group company, while based at the FCC Cape Town office. I lead end-to-end development of Aspen's Integrity Hub as the sole developer, covering frontend, backend, data workflows, authentication and enterprise integrations.
        </p>
        <p>
          My enterprise work includes Microsoft Entra ID / Azure AD Single Sign-On, SharePoint, Power Apps, Power Automate and Power BI, together with application support for Veeva PromoMats and Veeva QDocs across the Aspen environment.
        </p>
        <p>
          Alongside my professional role, I am the founder and technical architect of AutoPromote, an automated content and multi-camera media platform. I have built media-processing and analysis workflows using FFmpeg, OpenCV, Pillow and Librosa, with cloud-backed processing, publishing integrations and AI-assisted editing workflows.
        </p>
        <div className="skills">
          <h3>Core Technologies</h3>
          <p>JavaScript • TypeScript / TSX • Python</p>
          <p>React • Next.js • Vue • Django • Node.js</p>
          <p>PostgreSQL • Firebase • Supabase • REST APIs</p>
          <p>Microsoft Entra ID • SharePoint • Power Apps • Power Automate • Power BI</p>
          <p>Veeva PromoMats • Veeva QDocs</p>
          <p>FFmpeg • OpenCV • Cloud Deployment • CI/CD</p>
        </div>
      </div>
    </section>
  );
};

export default About;
