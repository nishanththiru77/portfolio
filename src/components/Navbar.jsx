import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Nishanth<span className="dot">.</span></span>
        </div>
        
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
          <a href="#contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Let's Talk</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
