import React from 'react';
import './FlagshipProject.css';
import biasmitraImg from '../assets/biasmitra.png';

const FlagshipProject = () => {
  return (
    <section id="projects" className="flagship">
      <div className="section-header">
        <span className="section-subtitle">Flagship Case Study</span>
        <h2 className="section-title">BiasMitra – AI Fairness Auditing Platform</h2>
        <p className="section-tagline">"Unbiased AI for Bharat"</p>
      </div>
      
      <div className="flagship-case-study glass-card">
        <div className="case-study-hero">
          <div className="case-study-image">
            <img src={biasmitraImg} alt="BiasMitra Fairness Dashboard" className="flagship-mockup" />
          </div>
          <div className="case-study-intro">
            <div className="mission-badge">PROJECT MISSION</div>
            <p className="mission-text">
              An AI-powered fairness auditing platform designed for government agencies and enterprises to identify demographic and intersectional bias in decision-making datasets before deployment.
            </p>
            <div className="tech-stack-mini">
              <span>Flutter</span> <span>Firebase</span> <span>Gemini AI</span> <span>CSV Engine</span>
            </div>
          </div>
        </div>

        <div className="case-study-content">
          <div className="content-block">
            <div className="block-icon">⚠️</div>
            <h3>The Problem</h3>
            <p className="context-text">Real-world AI systems (like Amazon's experimental hiring tool) have demonstrated unintended discrimination. As institutions rely more on AI for credit scoring and welfare distribution, hidden bias becomes a critical risk.</p>
            <p><strong>Challenge:</strong> Organizations lack intuitive tools to audit datasets for demographic parity and intersectional bias before these systems go live.</p>
          </div>

          <div className="content-block">
            <div className="block-icon">💡</div>
            <h3>The Solution</h3>
            <p>BiasMitra enables seamless auditing through:</p>
            <ul className="solution-list">
              <li><strong>Dynamic Modes:</strong> Specialized Government and Corporate auditing workflows.</li>
              <li><strong>AI Insights:</strong> Gemini-powered fairness explanations and what-if simulations.</li>
              <li><strong>Compliance:</strong> Generation of DPDP-compliant audit reports and fairness scores.</li>
            </ul>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <h4>Demographic Parity</h4>
            <p>Mathematical analysis of outcome distributions across groups.</p>
          </div>
          <div className="feature-item">
            <h4>Intersectional Bias</h4>
            <p>Detecting complex bias patterns across multiple demographic layers.</p>
          </div>
          <div className="feature-item">
            <h4>What-if Simulator</h4>
            <p>Simulating policy changes to see real-time impact on fairness scores.</p>
          </div>
          <div className="feature-item">
            <h4>Audit Reports</h4>
            <p>Professional PDF reporting for regulatory and internal compliance.</p>
          </div>
        </div>

        <div className="challenges-solved glass">
          <h4>Challenges Solved</h4>
          <div className="challenges-grid">
            <div className="challenge">
              <span className="bullet">⚡</span>
              <p>Built a schema-agnostic fairness analysis engine that handles diverse datasets.</p>
            </div>
            <div className="challenge">
              <span className="bullet">🔐</span>
              <p>Implemented DPDP-compliant reporting focused on data privacy and ethics.</p>
            </div>
            <div className="challenge">
              <span className="bullet">🧠</span>
              <p>Integrated AI explainability to turn raw scores into actionable policy advice.</p>
            </div>
          </div>
        </div>

        <div className="impact-footer">
          <div className="impact-point">
            <strong>Responsible AI</strong>
            <span>Supporting ethical adoption</span>
          </div>
          <div className="impact-point">
            <strong>Transparency</strong>
            <span>Enabling gov accountability</span>
          </div>
          <a href="https://github.com/nishanththiru77" target="_blank" rel="noreferrer" className="case-cta">
            Deep Dive on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlagshipProject;
