import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  id, 
  title,
  number,
  className = '', 
  fullHeight = false
}) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section 
      id={id}
      className={`px-6 py-24 md:py-32 max-w-6xl mx-auto ${
        fullHeight ? 'min-h-screen flex flex-col justify-center' : ''
      } ${className}`}
    >
      {title && (
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          {number && (
            <span className="text-[var(--primary)] font-mono mr-2 text-xl md:text-2xl">
              {number}.
            </span>
          )}
          {title}
          <span className="absolute -bottom-4 left-0 w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></span>
        </motion.h2>
      )}
      
      {children}
    </section>
  );
};

export default Section;