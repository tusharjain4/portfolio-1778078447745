'use client';

import React from 'react';

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
}

const Hero: React.FC<HeroProps> = ({ name, role, tagline }) => {
  const firstName = name.split(' ')[0]; // Assuming first name is sufficient for the "Nikita" slot

  const parts = role.split(' ');
  const part1 = parts.slice(0, Math.ceil(parts.length / 2)).join(' ');
  const part2 = parts.slice(Math.ceil(parts.length / 2)).join(' ');

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text-container">
            <h2 className="hero-hello">Hello</h2>
            <p className="hero-im">I&apos;m</p>
          </div>
          <p className="scroll-text">Scroll to explore</p>
          <img
            src="https://placehold.co/522x500/e0e0e0/cccccc/png"
            alt="Software Developer portfolio showcase"
            className="hero-image"
          />
        </div>
        <div className="hero-right">
          <div className="title-stack">
            <div className="title-bg-top"></div>
            <div className="title-text-container">
              <p className="title-product">{part1}</p>
              <div className="title-designer-section">
                <p className="title-designer">{part2}</p>
                <p className="title-name">{firstName}</p>
              </div>
            </div>
            <div className="title-bg-bottom"></div>
          </div>
          <p className="hero-description">{tagline}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;