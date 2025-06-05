import React from 'react';

const certificates = [
  { id: 1, title: 'Certificate 1', file: '/Tibule-Portfolio/images/1.pdf', thumbnail: '/Tibule-Portfolio/images/certificate1.jpg' },
  { id: 2, title: 'Certificate 2', file: '/Tibule-Portfolio/images/2.pdf', thumbnail: '/Tibule-Portfolio/images/certificate2.jpg' },
  { id: 3, title: 'Certificate 3', file: '/Tibule-Portfolio/images/3.pdf', thumbnail: '/Tibule-Portfolio/images/certificate3.jpg' },
  { id: 4, title: 'Certificate 4', file: '/Tibule-Portfolio/images/4.pdf', thumbnail: '/Tibule-Portfolio/images/certificate4.jpg' },
  { id: 5, title: 'Certificate 5', file: '/Tibule-Portfolio/images/5.pdf', thumbnail: '/Tibule-Portfolio/images/certificate5.jpg' },
  { id: 6, title: 'Certificate 6', file: '/Tibule-Portfolio/images/6.pdf', thumbnail: '/Tibule-Portfolio/images/certificate6.jpg' },
  { id: 7, title: 'Certificate 7', file: '/Tibule-Portfolio/images/7.pdf', thumbnail: '/Tibule-Portfolio/images/certificate7.jpg' },
  { id: 8, title: 'Certificate 8', file: '/Tibule-Portfolio/images/8.pdf', thumbnail: '/Tibule-Portfolio/images/certificate8.jpg' },
  { id: 9, title: 'Certificate 9', file: '/Tibule-Portfolio/images/9.pdf', thumbnail: '/Tibule-Portfolio/images/certificate9.jpg' },
  { id: 10, title: 'Certificate 10', file: '/Tibule-Portfolio/images/10.pdf', thumbnail: '/Tibule-Portfolio/images/certificate10.jpg' },
  { id: 11, title: 'CamScanner Certificate', file: '/Tibule-Portfolio/images/CamScanner%2011-26-2024%2018.51.pdf', thumbnail: '/Tibule-Portfolio/images/camscanner.jpg' },
];

const Certificates = () => {
  return (
    <section id="certificates" className="section certificates-section">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificates.map(cert => (
          <a
            key={cert.id}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
          >
            {cert.thumbnail && (
              <img
                src={cert.thumbnail}
                alt={cert.title}
                className="certificate-thumbnail"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            )}
            <div className="certificate-title">{cert.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
