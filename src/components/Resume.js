import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="section">
      <h2>Download My Resume</h2>
<a href={process.env.PUBLIC_URL + "/images/Thulani_Mtshwelo_CV.pdf"} download className="cta-button">Download Resume</a>
    </section>
  );
};

export default Resume;
