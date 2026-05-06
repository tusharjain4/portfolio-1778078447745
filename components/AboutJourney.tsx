'use client';

import React from 'react';

interface AboutJourneyProps {
  about: string;
  experience: number;
  currentRole: string;
  highlights: string[];
}

const AboutJourney: React.FC<AboutJourneyProps> = ({
  about,
  experience,
  currentRole,
  highlights,
}) => {
  return (
    <section id="about-journey" className="journey-section">
      <div className="journey-content">
        <h2 className="journey-title">About Me & My Journey</h2>

        {/* About Section - adapted from template description */}
        <div className="flex flex-col gap-4 text-text font-manrope text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl md:ml-0 lg:ml-[316px] mb-8">
          <p>{about}</p>
          <p>
            With **{experience} years** of experience, I am currently working as a **{currentRole}**.
          </p>
        </div>

        {/* Highlights/Journey List */}
        <div className="journey-list" role="list">
          {highlights.map((highlight, index) => (
            <article key={index} className="journey-item" role="listitem">
              <div className="journey-header">
                <div className="journey-icon">
                  <img
                    src="https://placehold.co/48x48/f0f0f0/cccccc/svg"
                    alt="Highlight icon"
                  />
                </div>
                <div className="journey-info">
                  <h3 className="journey-institution">Key Achievement</h3>
                  <p className="journey-period">Highlight {index + 1}</p>
                </div>
              </div>
              <div className="journey-details">
                <img
                  src="https://placehold.co/48x120/f0f0f0/cccccc/svg"
                  alt=""
                  className="journey-line"
                />
                <p className="journey-description">{highlight}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;