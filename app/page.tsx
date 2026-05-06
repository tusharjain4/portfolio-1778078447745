import Contact from '@/components/Contact';
import About from '@/components/About';
'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import AboutJourney from '@/components/AboutJourney'; // Renamed to combine About and Journey template section
import Footer from '@/components/Footer';

// Portfolio data
import portfolioData from '@/data/portfolio.json';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar
        name={portfolioData.name}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <main className="main-container">
        <div className="content-wrapper">
          <Hero
            name={portfolioData.name}
            role={portfolioData.role}
            tagline={portfolioData.tagline}
          />
          <Projects projects={portfolioData.projects} />
          <Skills skills={portfolioData.skills} />
          <AboutJourney
            about={portfolioData.about}
            experience={portfolioData.experience}
            currentRole={portfolioData.currentRole}
            highlights={portfolioData.highlights}
          />
          <Footer contact={portfolioData.contact} />
        </div>
      </main>
    </>
  );
}