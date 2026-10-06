import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Thulani's web development skills are exceptional! The project exceeded our expectations.",
    name: 'Omphile Rantswele',
    organisation: 'CAPACITI',
    context: 'Web Development',
  },
  {
    quote: 'I highly recommend Thulani. Their ability to design and develop is top-notch!',
    name: 'Brandon September',
    organisation: 'CAPACITI',
    context: 'Web Development & Design',
  },
  {
    quote: "Thank you Thulani for fixing some of the long standing issues that we've been battling with since we started using SharePoint.",
    name: 'Labo Nkuku',
    organisation: 'Aspen',
    context: 'SharePoint & Power Platform',
  },
  {
    quote: "I used that 'authorised editor' to update a protected field and it was successful.",
    name: 'Maggie Van Rooyen',
    organisation: 'Aspen',
    context: 'Business Systems Delivery',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <h2>What People Say</h2>
      <p className="testimonial-intro">
        Feedback from people I have learned from, built with, and delivered working solutions for.
      </p>

      <div className="testimonial-box">
        {testimonials.map((testimonial) => (
          <article className="testimonial" key={`${testimonial.name}-${testimonial.organisation}`}>
            <p className="testimonial-quote">“{testimonial.quote}”</p>
            <div className="testimonial-meta">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-organisation">{testimonial.organisation}</p>
              <span className="testimonial-context">{testimonial.context}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
