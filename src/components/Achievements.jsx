import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements">
      <div className="section-header">
        <span className="section-subtitle">Excellence</span>
        <h2 className="section-title">Achievements</h2>
      </div>
      
      <div className="ach-card glass">
        <div className="ach-icon">🏆</div>
        <div className="ach-content">
          <h3>ICPC Continental Round Shortlist</h3>
          <p>Recognized among the top competitive programmers at the continental level.</p>
        </div>
      </div>
      
      <div className="ach-card glass">
        <div className="ach-icon">🥇</div>
        <div className="ach-content">
          <h3>Project Expo Winner</h3>
          <p>Awarded first place for technical innovation and social impact in engineering.</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
