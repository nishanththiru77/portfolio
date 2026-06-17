import React from 'react';
import './OtherProjects.css';

const projects = [
  {
    title: 'Seamless Attendance System',
    desc: 'AI-powered attendance management system using facial recognition and image processing techniques to automate attendance tracking.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Pandas', 'Tkinter'],
    learning: 'Gained hands-on experience in computer vision, image preprocessing, face recognition workflows, and desktop application development.'
  },
  {
    title: 'Sanghamam',
    desc: 'Community and employment platform enabling users to discover and apply for opportunities through a user-friendly mobile application.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    learning: 'Strengthened Flutter development, Firebase integration, and mobile UI design skills.'
  },
  {
    title: 'E-Commerce Website',
    desc: 'Full-stack e-commerce platform featuring authentication, product management, user workflows, and database integration.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    learning: 'Learned full-stack architecture, REST APIs, authentication systems, and frontend-backend communication.'
  }
];

const OtherProjects = () => {
  return (
    <section className="other-projects">
      <h3 className="sub-heading">Other Initiatives</h3>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card glass">
            <h4>{p.title}</h4>
            <p className="p-desc">{p.desc}</p>
            <div className="p-tech">
              {p.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="learning">
              <strong>Outcome:</strong> {p.learning}
            </div>
            <a href="https://github.com/nishanththiru77" className="p-link">GitHub ↗</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
