import React from 'react';

const certificates = [
  { id: 1, title: 'Certificate 1', file: '/Tibule-Portfolio/images/1.pdf', thumbnail: '' },
  { id: 2, title: 'Certificate 2', file: '/Tibule-Portfolio/images/2.pdf', thumbnail: '' },
  { id: 3, title: 'Certificate 3', file: '/Tibule-Portfolio/images/3.pdf', thumbnail: '' },
  { id: 4, title: 'Certificate 4', file: '/Tibule-Portfolio/images/4.pdf', thumbnail: '' },
  { id: 5, title: 'Certificate 5', file: '/Tibule-Portfolio/images/5.pdf', thumbnail: '' },
  { id: 6, title: 'Certificate 6', file: '/Tibule-Portfolio/images/6.pdf', thumbnail: '' },
  { id: 7, title: 'Certificate 7', file: '/Tibule-Portfolio/images/7.pdf', thumbnail: '' },
  { id: 8, title: 'Certificate 8', file: '/Tibule-Portfolio/images/8.pdf', thumbnail: '' },
  { id: 9, title: 'Certificate 9', file: '/Tibule-Portfolio/images/9.pdf', thumbnail: '' },
  { id: 10, title: 'Certificate 10', file: '/Tibule-Portfolio/images/10.pdf', thumbnail: '' },
  { id: 11, title: 'CamScanner Certificate', file: '/images/CamScanner_Certificate.pdf', thumbnail: '' },
];

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
            {cert.thumbnail && (
              <img
                src={cert.thumbnail}
                alt={cert.title}
                className="certificate-thumbnail"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            )}
            <div
              className="certificate-title"
              style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
            >
              {cert.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
