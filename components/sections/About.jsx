import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const About = () => {
  const skills = [
    'Vue.js', 
    'Javascript',
    'React',
    'Next.js',
    'PHP',
    'Python',
    'Docker',
    'Java',
    'PostgreSQL'
  ];

  return (
    <Section id="about" title="About Me" number="01">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg mb-4">
            Hello! My name is <span className="text-[var(--primary)] font-medium">Filippo Ciandy</span> 
            , a passionate full-stack developer dedicated to building software that makes an impact. My journey began in 2015 when my dad introduced me to Arduino, sparking my passion for problem-solving through technology.
          </p>
          
          <p className="text-lg mb-4">
          Fast-forward to today, I’ve had the privilege of working with multiple companies, optimizing their workflows with custom software. Now, my focus is on developing scalable, efficient, and high-performance solutions that help businesses thrive.          </p>
          
          <p className="text-lg mb-6">
            Here are a few technologies I've been working with recently:
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
            {skills.map((skill, i) => (
              <motion.div 
                key={i} 
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
                <span className="ml-3 font-mono text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Image */}
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mx-auto max-w-xs">
            {/* Image Frame */}
            <div className="relative z-10 overflow-hidden rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-1">
              <div className="bg-[var(--light)] rounded-md overflow-hidden">
                <Image
                  src="/images/portrait_fil.png"
                  alt="Your profile"
                  width={600}
                  height={600}
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--secondary)] rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--primary)] rounded-lg z-0"></div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;