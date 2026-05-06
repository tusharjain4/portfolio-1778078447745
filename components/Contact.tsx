'use client';

// The contact section in the Adizen template is primarily the footer.
// This component is created to ensure all sections are present as requested,
// but its content will be minimal, directing to the footer for contact.
// Or, if desired, a more prominent contact form could be added here.
// Given the "minimal" mood and template structure, a simple call-to-action
// leading to the footer's contact points is appropriate.

import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-pageBackground">
      <div className="content-wrapper text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-dot-gothic-16 text-text mb-6">
          Get in Touch
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl font-manrope text-secondary mb-8 max-w-xl mx-auto">
          I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <a href="#footer" className="footer-email inline-block">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;