import React from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import projectsData from '../../data/projects';

const Projects = () => {
  return (
    <>
      <h2 className="section-heading">Some Things I've Built</h2>
      
      <div className="space-y-24">
        {projectsData.map((project, i) => (
          <div 
            key={i} 
            className={`relative grid grid-cols-12 items-center gap-2 md:gap-10 ${
              i % 2 === 0 ? '' : 'md:text-right'
            }`}
          >
            {/* Project Image */}
            <div 
              className={`col-span-12 row-span-full ${
                i % 2 === 0 
                  ? 'md:col-start-6 md:col-end-13' 
                  : 'md:col-start-1 md:col-end-8'
              }`}
            >
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative w-full h-0 pb-[56.25%] rounded overflow-hidden"
              >
                <div className="absolute inset-0 bg-[var(--green)] opacity-20 hover:opacity-0 transition-opacity duration-300 z-10"></div>
                <Image 
                  src={project.image}
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover"
                  className="mix-blend-multiply grayscale contrast-125 brightness-75"
                />
              </a>
            </div>
            
            {/* Project Content */}
            <div 
              className={`col-span-12 row-span-full z-10 ${
                i % 2 === 0 
                  ? 'md:col-start-1 md:col-end-7' 
                  : 'md:col-start-7 md:col-end-13'
              }`}
            >
              <p className="font-mono text-[var(--green)] text-sm mb-1">
                Featured Project
              </p>
              
              <h3 className="text-2xl font-semibold text-[var(--lightest-slate)] mb-4">
                {project.title}
              </h3>
              
              <div className="p-5 bg-[var(--light-navy)] rounded shadow-xl mb-4">
                <p>{project.description}</p>
              </div>
              
              {/* <ul className={`flex flex-wrap mb-4 text-sm font-mono ${
                i % 2 === 0 ? '' : 'md:justify-end'
              }`}>
                {project.technologies.map((tech, j) => (
                  <li key={j} className="mr-4 md:ml-4 mb-2">
                    {tech}
                  </li>
                ))}
              </ul> */}
              
              <div className={`flex text-[var(--lightest-slate)] ${
                i % 2 === 0 ? '' : 'md:justify-end'
              }`}>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mr-4 text-lg hover:text-[var(--green)]"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub />
                  </a>
                )}
                
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg hover:text-[var(--green)]"
                    aria-label="Live Project"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;