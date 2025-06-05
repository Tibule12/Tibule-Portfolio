import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Testimonials />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
