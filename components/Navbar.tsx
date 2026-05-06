'use client';

import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  name: string;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ name, isMenuOpen, toggleMenu }) => {
  const initials = name.split(' ').map((n) => n[0]).join('');

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about-journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="header-container fixed top-0 left-0 right-0 z-50">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="logo-text">{initials}</h1>
          <div className="logo-divider"></div>
          <Link href="#hero" aria-label="Home">
            <img
              src="https://placehold.co/26x28/f0f0f0/cccccc/svg"
              alt="Logo icon"
              className="logo-icon"
            />
          </Link>
        </div>
        <button className="hamburger" aria-label="Menu" onClick={toggleMenu}>
          ☰
        </button>
        <nav
          className={`nav-menu ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white border-b border-text p-4' : 'hidden'} lg:flex lg:static lg:w-auto lg:p-0 lg:border-none`}
          role="menubar"
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <button
                role="menuitem"
                onClick={toggleMenu} // Close menu on item click for mobile
              >
                {item.name}
              </button>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;