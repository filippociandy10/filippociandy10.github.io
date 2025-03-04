import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../ui/Section';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section id="hero" fullHeight={true}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="text-[var(--primary)] mb-4 font-mono"
            variants={itemVariants}
          >
            Hello, I am
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 gradient-text"
            variants={itemVariants}
          >
            Filippo Ciandy
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-medium text-[var(--gray)] mb-6"
            variants={itemVariants}
          >
          Passionate about crafting scalable & efficient solutions
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[var(--gray)] mb-8 max-w-lg"
            variants={itemVariants}
          >
            I'm a full-stack software developer specializing in building fast, scalable, and user-friendly application

          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn btn-primary">
              See My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Image with Decorative Elements */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/profile.jpg"
              alt="Filippo Ciandy"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-gradient-to-br from-[var(--primary-light)] to-[var(--secondary)] rounded-full opacity-20 blur-xl z-0"></div>
          <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-[var(--secondary)] rounded-full opacity-20 blur-xl z-0"></div>
          
          {/* Decorative Border */}
          <div className="absolute top-8 -right-8 w-full h-full border-4 border-[var(--primary)] rounded-2xl z-0"></div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;