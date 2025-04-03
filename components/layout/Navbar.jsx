import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', url: '/#about' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[var(--light)]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="px-8 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="text-[var(--primary)] font-medium font-mono flex items-center">
              <span className="text-xl">FC</span>
              <span className="w-2 h-2 rounded-full bg-[var(--secondary)] ml-1"></span>
            </div>
          </Link>

          <div className="navbar-container">
            {navLinks.map(({ name, url }, i) => (
              <Link 
                key={i}
                href={url}
                className="text-[var(--dark)] hover:text-[var(--primary)] transition-colors duration-300 relative group"
              >
                {name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;