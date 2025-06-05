import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert('Please fill out all fields!');
      return;
    }
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <h4>Let's Talk</h4>
          <p>Turning ideas into seamless digital experiences.</p>
          <img src="/Tibule-Portfolio/images/contact.jpg" alt="Contact" className="contact-pic" />
          <div className="details">
            <p><strong>Email:</strong> thulani.mtshwelo@capaciti.org.za </p>
            <p><strong>Phone:</strong> +27 621349570</p>
            <p><strong>Address:</strong> 35316 Luma Street Harare, Cape Town, 7784, South Africa</p>
          </div>

          <div className="linkedin-container">
            <a href="https://www.linkedin.com/in/thulani-mtshwelo-7b9948296/" target="_blank" rel="noopener noreferrer" className="linkedin-link" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#0A66C2"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="linkedinIconTitle"
              >
                <title id="linkedinIconTitle">LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669h-3.554v-11.5h3.414v1.571h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.326zM5.337 8.433c-1.144 0-2.07-.927-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.144 0 2.07.926 2.07 2.07 0 1.143-.926 2.07-2.07 2.07zm1.777 12.019h-3.554v-11.5h3.554v11.5zm15.886-20.452h-19.999c-.552 0-1 .448-1 1v19.999c0 .552.448 1 1 1h19.999c.552 0 1-.448 1-1v-19.999c0-.552-.448-1-1-1z"/>
              </svg>
            </a>
            <a href="https://github.com/Tibule12" target="_blank" rel="noopener noreferrer" className="github-link" aria-label="GitHub" style={{marginLeft: '10px'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#181717"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="githubIconTitle"
              >
                <title id="githubIconTitle">GitHub</title>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>

          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Write your message here" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
