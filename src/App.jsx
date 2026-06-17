import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlagshipProject from './components/FlagshipProject';
import OtherProjects from './components/OtherProjects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Basic Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="app-container">
      <div className="gradient-bg"></div>
      <Navbar />
      <Hero />
      <div id="about">
        <section className="about-summary">
          <div className="glass-card p-40">
            <h2 className="section-title">Nishanth Natesh</h2>
            <p className="large-text">
              I am an EEE student transitioning into **Software Engineering and AI**, driven by a passion for building systems that solve practical, high-stakes problems. 
              My focus lies at the intersection of **Responsible AI, software systems, and scalable technology**. 
              Whether it’s mastering Data Structures in Java or architecting AI fairness platforms, I build with a deep desire to understand the "why" and "how" behind every system I touch.
            </p>
          </div>
        </section>
      </div>
      <FlagshipProject />
      <OtherProjects />
      <Experience />
      <Skills />
      <Achievements />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;
