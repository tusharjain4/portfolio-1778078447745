'use client';

import React from 'react';
import Link from 'next/link';

interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

interface FooterProps {
  contact: ContactInfo;
}

const Footer: React.FC<FooterProps> = ({ contact }) => {
  return (
    <footer id="footer" className="footer-section">
      <div className="content-wrapper">
        <div className="footer-content">
          <div className="footer-top">
            <p className="footer-copyright">© {new Date().getFullYear()} Pooja R. Sonar. All rights reserved.</p>
            <Link href={`mailto:${contact.email}`} passHref>
              <button className="footer-email">{contact.email}</button>
            </Link>
            <div className="social-links">
              {contact.linkedin && (
                <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </Link>
              )}
              {contact.github && (
                <Link href={contact.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.492.997.107-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.381 1.235-3.221-.135-.303-.54-.509.11-.748 0 0 1.05-.32 3.438 1.233 1.05-.292 2.163-.438 3.30-.438 1.136 0 2.25.146 3.3.438 2.388-1.552 3.437-1.233 3.437-1.233.65.239.24.445.11.748.77.84 1.235 1.911 1.235 3.221 0 4.61-2.801 5.62-5.476 5.922.43.369.812 1.101.812 2.219v3.292c0 .317.192.694.801.576c4.765-1.589 8.197-6.095 8.197-11.389 0-6.627-5.373-12-12-12z"/></svg>
                </Link>
              )}
            </div>
          </div>
          <img
            src="https://placehold.co/1000x100/f0f0f0/cccccc/svg"
            alt="Decorative pattern"
            className="footer-pattern"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;