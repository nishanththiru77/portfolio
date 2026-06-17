import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Agentic AI Intern',
    company: 'AI Solutions Lab',
    range: '2026 - Present',
    points: ['AI workflows & automation', 'Prompt engineering', 'AI agents development', 'Intelligent task orchestration']
  },
  {
    role: 'MERN Stack Intern',
    company: 'WebDev Forge',
    range: '2025',
    points: ['Full-stack development exposure', 'Modern web technologies', 'Application architecture', 'Team collaboration']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <span className="section-subtitle">Career Path</span>
        <h2 className="section-title">Internships</h2>
      </div>
      
      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-item glass">
            <div className="exp-meta">
              <span className="exp-role">{exp.role}</span>
              <span className="exp-range">{exp.range}</span>
            </div>
            <h4 className="exp-company">{exp.company}</h4>
            <ul className="exp-points">
              {exp.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
