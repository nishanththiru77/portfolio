import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'C++', 'C']
  },
  {
    title: 'Development',
    skills: ['Flutter', 'Firebase', 'React', 'Node.js']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub']
  },
  {
    title: 'Concepts',
    skills: ['DSA', 'Problem Solving', 'OOP', 'Responsible AI']
  }
];

const Skills = () => {
  return (
    <section className="skills">
      <div className="section-header">
        <span className="section-subtitle">Tech Stack</span>
        <h2 className="section-title">Skills & Expertise</h2>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div key={i} className="skill-cat">
            <h4>{cat.title}</h4>
            <div className="skill-tags">
              {cat.skills.map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
