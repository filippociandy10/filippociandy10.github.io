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
            I'm a full-stack software developer specializing in building fast, scalable, and user-friendly applications.
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

        <motion.div 
          className="relative mx-auto"
          style={{ width: '300px', height: '350px' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-[var(--primary-light)] to-[var(--secondary)] rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[var(--secondary)] rounded-full opacity-20 blur-xl"></div>
          <div className="absolute top-5 -right-5 w-full h-full border-2 border-[var(--primary)] rounded-2xl"></div>
          
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl" style={{ width: '280px', height: '330px' }}>
            <Image
              src="/images/portrait_fil.png"
              alt="Filippo Ciandy"
              fill
              className="object-cover"
              sizes="280px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;