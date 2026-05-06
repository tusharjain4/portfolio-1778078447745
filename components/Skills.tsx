'use client';

import React from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <img
                  src="https://placehold.co/68x68/f0f0f0/cccccc/svg"
                  alt={`${category.name} icon`}
                />
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{category.name}</h3>
                <p className="skill-description">{category.skills.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;