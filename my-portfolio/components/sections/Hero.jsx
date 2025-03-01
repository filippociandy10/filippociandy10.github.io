import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      className="flex flex-col justify-center min-h-screen px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.p 
        className="font-mono text-[var(--green)] mb-4"
        variants={childVariants}
      >
        Hi, my name is
      </motion.p>
      
      <motion.h1 
        className="text-5xl md:text-7xl font-bold text-[var(--lightest-slate)] mb-4"
        variants={childVariants}
      >
        Your Name.
      </motion.h1>
      
      <motion.h2 
        className="text-4xl md:text-6xl font-bold text-[var(--slate)] mb-6"
        variants={childVariants}
      >
        I build things for the web.
      </motion.h2>
      
      <motion.p 
        className="max-w-xl text-lg mb-12"
        variants={childVariants}
      >
        I'm a software engineer specializing in building (and occasionally designing) 
        exceptional digital experiences. Currently, I'm focused on building accessible, 
        human-centered products.
      </motion.p>
      
      <motion.div variants={childVariants}>
        <a 
          href="#projects" 
          className="inline-block font-mono border border-[var(--green)] text-[var(--green)] px-7 py-4 rounded hover:bg-[rgba(100,255,218,0.1)] transition-all"
        >
          Check out my work!
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;