import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section'

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  
  const experienceData = [
    {
      company: 'Company XYZ',
      url: 'https://companyxyz.com',
      title: 'Senior Frontend Developer',
      range: 'January 2023 - Present',
      responsibilities: [
        'Developed and maintained core features for the company\'s flagship product using React, TypeScript, and GraphQL',
        'Led a team of 3 developers to implement a new design system that improved development efficiency by 40%',
        'Collaborated with designers and product managers to create intuitive user experiences',
        'Optimized web performance resulting in a 30% improvement in load times',
        'Mentored junior developers through code reviews and pair programming sessions'
      ]
    },
    {
      company: 'Studio ABC',
      url: 'https://studioabc.com',
      title: 'Web Developer',
      range: 'June 2020 - December 2022',
      responsibilities: [
        'Built responsive websites and web applications for various clients using modern JavaScript frameworks',
        'Optimized website performance, improving load times by up to 60%',
        'Implemented SEO best practices, resulting in a 45% increase in organic traffic',
        'Collaborated with a cross-functional team of designers, project managers, and other developers',
        'Migrated legacy applications to modern tech stacks, improving maintainability and performance'
      ]
    },
    {
      company: 'Digital Agency',
      url: 'https://digitalagency.com',
      title: 'Frontend Developer',
      range: 'August 2018 - May 2020',
      responsibilities: [
        'Developed responsive, cross-browser compatible websites from design mockups',
        'Created interactive UI components and animations using JavaScript and CSS',
        'Worked closely with UX/UI designers to implement pixel-perfect layouts',
        'Utilized version control and CI/CD pipelines for efficient code management',
        'Participated in client meetings and translated business requirements into technical solutions'
      ]
    },
    {
      company: 'Tech Startup',
      url: 'https://techstartup.com',
      title: 'Junior Web Developer',
      range: 'January 2017 - July 2018',
      responsibilities: [
        'Assisted in developing and maintaining client websites using HTML, CSS, and JavaScript',
        'Implemented responsive design approaches and tested across various browsers and devices',
        'Collaborated with the design team to create visually appealing web interfaces',
        'Participated in code reviews to ensure code quality and best practices',
        'Built and integrated third-party APIs for enhanced website functionality'
      ]
    }
  ];

  // Focus handling for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (tabFocus !== null) {
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setTabFocus(tabFocus === 0 ? tabs.current.length - 1 : tabFocus - 1);
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setTabFocus(tabFocus === tabs.current.length - 1 ? 0 : tabFocus + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [tabFocus]);

  // Effect for changing tab focus
  useEffect(() => {
    if (tabFocus !== null) {
      tabs.current[tabFocus].focus();
    }
  }, [tabFocus]);

  // Focus management when changing tabs
  const onTabClick = (id) => {
    setActiveTabId(id);
    setTabFocus(id);
  };

  return (
    <Section id="experience" number="02" title="Where I've Worked">
      <div className="min-h-[340px] flex flex-col md:flex-row">
        <div className="relative flex overflow-x-auto mb-8 md:mb-0 md:block md:w-max">
          <div className="flex md:flex-col w-max border-b md:border-b-0 md:border-l border-[var(--lightest-navy)]">
            {experienceData.map((item, i) => (
              <button
                key={i}
                className={`min-w-[140px] px-5 py-3 text-left font-mono text-sm whitespace-nowrap transition-all outline-none focus:bg-[var(--light-navy)] ${
                  activeTabId === i
                    ? 'text-[var(--green)] border-b-2 md:border-b-0 md:border-l-2 border-[var(--green)]'
                    : 'text-[var(--slate)] hover:bg-[var(--light-navy)] hover:text-[var(--lightest-slate)]'
                }`}
                onClick={() => onTabClick(i)}
                ref={el => (tabs.current[i] = el)}
                id={`tab-${i}`}
                role="tab"
                tabIndex={activeTabId === i ? 0 : -1}
                aria-selected={activeTabId === i}
                aria-controls={`panel-${i}`}
              >
                {item.company}
              </button>
            ))}
          </div>
          <div 
            className="hidden md:block absolute h-0.5 md:w-0.5 md:h-[var(--tab-height)] bg-[var(--green)] transition-all duration-250"
            style={{ 
              '--tab-height': '42px',
              top: activeTabId * 42, // Adjust this value to match tab height
              left: 0
            }}
          />
        </div>

        <div className="md:ml-10 w-full">
          {experienceData.map((item, i) => (
            <motion.div
              key={i}
              id={`panel-${i}`}
              role="tabpanel"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-labelledby={`tab-${i}`}
              aria-hidden={activeTabId !== i}
              className={`${activeTabId === i ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: activeTabId === i ? 1 : 0, y: activeTabId === i ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-medium text-[var(--lightest-slate)]">
                {item.title}{' '}
                <span className="text-[var(--green)]">
                  @ <a href={item.url} className="inline-link" target="_blank" rel="noopener noreferrer">
                    {item.company}
                  </a>
                </span>
              </h3>

              <p className="mt-1 mb-4 font-mono text-sm text-[var(--light-slate)]">
                {item.range}
              </p>

              <ul className="space-y-2.5">
                {item.responsibilities.map((responsibility, j) => (
                  <li key={j} className="flex">
                    <div className="text-[var(--green)] mr-2 pt-1">▹</div>
                    <div>{responsibility}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;