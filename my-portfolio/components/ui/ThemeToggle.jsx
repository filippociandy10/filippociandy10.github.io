import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    } else if (savedTheme === 'dark' || prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      // Switch to light mode
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark mode
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
    
    setIsDark(!isDark);
  };

  return (
    <motion.button 
      onClick={toggleTheme} 
      className="relative w-6 h-6 focus:outline-none"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div 
        className="w-6 h-6 rounded-full overflow-hidden border border-[var(--lightest-slate)]"
        animate={{ 
          backgroundColor: isDark ? 'transparent' : 'white', 
          borderColor: isDark ? 'var(--lightest-slate)' : 'transparent' 
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-white rounded-full"
          initial={false}
          animate={{ 
            scale: isDark ? 0 : 1,
            x: isDark ? '100%' : '0%'
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0 border-2 border-[var(--lightest-slate)] rounded-full"
          initial={false}
          animate={{ 
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;