import React from 'react';
import Image from 'next/image';
import { px } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'GraphQL'
  ];

  return (
    <>
      <h2 className="section-heading">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <div className="space-y-4">
            <p>
              Hello! My name is Your Name and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught 
              me a lot about HTML & CSS!
            </p>
            
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a huge corporation, and a student-led design studio. My main focus these 
              days is building accessible, inclusive products and digital experiences for a variety 
              of clients.
            </p>
            
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[var(--green)] mr-2">▹</span>
                  <span className="font-mono text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="relative max-w-xs mx-auto md:mx-0">
            <div className="relative w-full aspect-square bg-[var(--green)] rounded overflow-hidden">
              <div className="absolute inset-0 bg-[var(--green)] opacity-30 hover:opacity-0 transition-opacity duration-300 z-10"></div>
              <Image
                src="/images/profile.jpg" 
                alt="Profile picture"
                objectFit="cover"
                className="mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-300"
                width="500"
                height="500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;