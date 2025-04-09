import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import projectsData from '../../data/projects';

const Projects = () => {
  // Filter featured projects
  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);

  return (
    <Section id="projects" title="My Projects" number="04">
      <div className="mb-20">
        {featuredProjects.map((project, i) => (
          <motion.div 
            key={project.id}
            className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20 last:mb-0`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={`md:col-span-7 ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                {project.external ? (
                  <a 
                    href={project.external} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-auto transition-transform duration-700 hover:scale-105"
                    />
                  </a>
                ) : (
                  <div className="block">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>
            
            <div className={`md:col-span-5 ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <div className={`flex flex-col ${i % 2 === 0 ? '' : 'md:items-end md:text-right'}`}>
                <p className="font-mono text-[var(--primary)] mb-1">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4">
                  {(project.external || project.github) ? (
                    <a 
                      href={project.external || project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--dark)] hover:text-[var(--primary)] transition-colors"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <span className="text-[var(--dark)]">{project.title}</span>
                  )}
                </h3>
                
                <div className="p-5 bg-[var(--light-gray)]/50 rounded-lg shadow-sm backdrop-blur-sm mb-4">
                  <p>{project.description}</p>
                </div>
                
                <ul className={`flex flex-wrap gap-3 mb-6 ${i % 2 === 0 ? '' : 'md:justify-end'}`}>
                  {project.tags.map((tag, j) => (
                    <li key={j} className="font-mono text-xs px-3 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--primary)]">
                      {tag}
                    </li>
                  ))}
                </ul>
                
                <div className={`flex gap-4 ${i % 2 === 0 ? '' : 'md:justify-end'}`}>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-[var(--gray)] hover:text-[var(--primary)] transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                  
                  {project.external && (
                    <a 
                      href={project.external} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="External Link"
                      className="text-[var(--gray)] hover:text-[var(--primary)] transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {otherProjects.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Noteworthy Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, i) => (
              <motion.div 
                key={project.id}
                className="bg-[var(--light-gray)]/30 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 text-[var(--primary)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    
                    <div className="flex gap-3">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="text-[var(--gray)] hover:text-[var(--primary)] transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                      )}
                      
                      {project.external && (
                        <a 
                          href={project.external} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="External Link"
                          className="text-[var(--gray)] hover:text-[var(--primary)] transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">
                    {(project.external || project.github) ? (
                      <a 
                        href={project.external || project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--dark)] hover:text-[var(--primary)] transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span className="text-[var(--dark)]">{project.title}</span>
                    )}
                  </h3>
                  
                  <p className="text-[var(--gray)] mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="px-6 pb-6">
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag, j) => (
                      <li key={j} className="font-mono text-xs px-2 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--primary)]">
                        {tag}
                      </li>
                    ))}
                    {project.tags.length > 4 && (
                      <li className="font-mono text-xs px-2 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--primary)]">
                        +{project.tags.length - 4}
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
};

export default Projects;