'use client';

import React from 'react';

interface Project {
  name: string;
  description: string;
  tech: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  // Array of placeholder image URLs
  const placeholderImages = [
    'https://placehold.co/836x396/e0e0e0/cccccc/png',
    'https://placehold.co/836x396/d0d0d0/bbbbbb/png',
    'https://placehold.co/836x396/c0c0c0/aaaaaa/png',
  ];

  return (
    <section id="projects" className="works-section">
      <div className="works-content">
        <h2 className="works-title">My Projects</h2>
        <div role="list">
          {projects.map((project, index) => (
            <article key={index} className="project-item" role="listitem">
              <div className="project-info">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-keywords">
                  {project.tech.map((techItem, techIndex) => (
                    <span key={techIndex} className="keyword">
                      {techItem}
                    </span>
                  ))}
                </div>
                <p className="project-description">{project.description}</p>
              </div>
              <img
                src={placeholderImages[index % placeholderImages.length]}
                alt={`Project showcase for ${project.name}`}
                className="project-image"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;