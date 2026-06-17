import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content reveal">
        <span className="badge">AI BUILDER & ENGINEER</span>
        <h1 className="hero-title">
          Building <span className="gradient-text">Responsible AI Systems</span>, Solving Real-World Problems.
        </h1>
        <p className="hero-subtitle">
          EEE Student | Java & DSA Learner | AI Builder | Problem Solver
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-visual">
        <img src={heroImage} alt="AI Visual" className="hero-img" />
        <div className="abstract-shape"></div>
      </div>
    </section>
  );
};

export default Hero;
