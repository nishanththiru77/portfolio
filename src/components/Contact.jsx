import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-header center">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-subtitle">Currently seeking opportunities to build and learn.</p>
      </div>
      
      <div className="contact-info glass-card">
        <a href="mailto:nishanththiru77@gmail.com" className="contact-link">
          <span className="contact-icon">📧</span>
          <div className="link-text">
            <span>Email Me</span>
            <strong>nishanththiru77@gmail.com</strong>
          </div>
        </a>
        
        <a href="https://linkedin.com/in/nishanthnatesh-k-7b55b635a" target="_blank" rel="noreferrer" className="contact-link">
          <span className="contact-icon">🔗</span>
          <div className="link-text">
            <span>LinkedIn</span>
            <strong>nishanthnatesh-k</strong>
          </div>
        </a>
        
        <a href="https://github.com/nishanththiru77" target="_blank" rel="noreferrer" className="contact-link">
          <span className="contact-icon">💻</span>
          <div className="link-text">
            <span>GitHub</span>
            <strong>nishanththiru77</strong>
          </div>
        </a>
      </div>
      
      <footer className="footer">
        <div className="quote">"Technology is most powerful when it solves real problems fairly."</div>
        <div className="copyright">© {new Date().getFullYear()} Nishanth Natesh. Built for Impact.</div>
      </footer>
    </section>
  );
};

export default Contact;
