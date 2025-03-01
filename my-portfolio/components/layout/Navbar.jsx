import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '../ui/Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    { name: 'Experience', url: '/#experience' },
    { name: 'Work', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-[var(--navy)] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map(({ name, url }, i) => (
              <motion.li key={i} variants={linkVariants}>
                <Link 
                  href={url}
                  className="text-[var(--lightest-slate)] hover:text-[var(--green)] font-mono text-sm"
                >
                  <span className="text-[var(--green)]">0{i + 1}.</span> {name}
                </Link>
              </motion.li>
            ))}
            <motion.li variants={linkVariants}>
              <a 
                href="/resume.pdf" 
                className="border border-[var(--green)] text-[var(--green)] rounded px-4 py-2 font-mono text-sm hover:bg-[rgba(100,255,218,0.1)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--green)]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed top-0 right-0 bottom-0 w-3/4 bg-[var(--light-navy)] shadow-xl p-12 flex flex-col justify-center md:hidden"
        >
          <ul className="flex flex-col space-y-6 items-center">
            {navLinks.map(({ name, url }, i) => (
              <li key={i}>
                <Link 
                  href={url}
                  className="text-[var(--lightest-slate)] hover:text-[var(--green)] font-mono text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-[var(--green)]">0{i + 1}.</span> {name}
                </Link>
              </li>
            ))}
            <li>
              <a 
                href="/resume.pdf" 
                className="border border-[var(--green)] text-[var(--green)] rounded px-6 py-3 font-mono text-lg hover:bg-[rgba(100,255,218,0.1)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;