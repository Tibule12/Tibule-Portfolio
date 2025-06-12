import React from 'react';

const certificates = [
  { id: 1, title: 'Instructor Network', file: '/Tibule-Portfolio/images/1.pdf', thumbnail: '' },
  { id: 2, title: 'Introduction to Software Development', file: '/Tibule-Portfolio/images/2.pdf', thumbnail: '' },
  { id: 3, title: 'Verbal Communication and Presentation Skills', file: '/Tibule-Portfolio/images/3.pdf', thumbnail: '' },
  { id: 4, title: 'Programming with Java', file: '/Tibule-Portfolio/images/4.pdf', thumbnail: '' },
  { id: 5, title: 'Generative AI: Introduction and Applications', file: '/Tibule-Portfolio/images/5.pdf', thumbnail: '' },
  { id: 6, title: 'Building AI Powered Chatbots Without Programming', file: '/Tibule-Portfolio/images/6.pdf', thumbnail: '' },
  { id: 7, title: 'Work Smarter, Not Harder: Time Management for Personal & Professional Productivity', file: '/Tibule-Portfolio/images/7.pdf', thumbnail: '' },
  { id: 8, title: 'Developing Interpersonal Skills', file: '/Tibule-Portfolio/images/8.pdf', thumbnail: '' },
  { id: 9, title: 'Generative AI: Prompt Engineering Basics', file: '/Tibule-Portfolio/images/9.pdf', thumbnail: '' },
  { id: 10, title: 'Introduction to Artificial Intelligence', file: '/Tibule-Portfolio/images/10.pdf', thumbnail: '' },
  { id: 11, title: 'Systems Development', file: process.env.PUBLIC_URL + '/images/CamScanner_Certificate.pdf', thumbnail: '' },
];

const defaultThumbnail = process.env.PUBLIC_URL + '/images/certificate-placeholder.png';

const Certificates = () => {
  return (
    <section id="certificates" className="section certificates-section">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificates.map(cert => (
          <div
            key={cert.id}
            className="certificate-card"
            role="button"
            tabIndex={0}
            onClick={() => {
              try {
                window.open(cert.file, '_blank', 'noopener,noreferrer');
              } catch (error) {
                alert('Failed to open certificate link: ' + error.message);
              }
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                try {
                  window.open(cert.file, '_blank', 'noopener,noreferrer');
                } catch (error) {
                  alert('Failed to open certificate link: ' + error.message);
                }
              }
            }}
          >
            <img
              src={cert.thumbnail || defaultThumbnail}
              alt={cert.title}
              className="certificate-thumbnail"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="certificate-title">
              {cert.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
