import React from 'react';
import './Timeline.css';

const journey = [
  { era: '2024', event: 'EEE Student', desc: 'Starting the foundation in electrical and systems engineering.' },
  { era: '2024 - 2025', event: 'Programming Fundamentals', desc: 'Mastering Java, Python, and the core of problem solving.' },
  { era: '2025', event: 'AI Projects & Full Stack', desc: 'Building BiasMitra and exploring scalable web architectures.' },
  { era: '2026', event: 'Agentic AI & DSA', desc: 'Deep diving into intelligent automation and complex algorithms.' },
  { era: 'Future', event: 'Future Software Engineer', desc: 'Architecting responsible and high-impact technology.' }
];

const Timeline = () => {
  return (
    <section className="timeline">
      <div className="section-header">
        <span className="section-subtitle">Roadmap</span>
        <h2 className="section-title">My Learning Journey</h2>
      </div>
      
      <div className="timeline-container">
        {journey.map((item, i) => (
          <div key={i} className="timeline-item">
            <div className="time-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="time-content">
              <span className="time-year">{item.era}</span>
              <h4>{item.event}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
