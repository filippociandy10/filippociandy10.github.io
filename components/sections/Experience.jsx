import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section'

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  
  const experienceData = [
    {
      company: 'Unindo Niaga Pratama',
      url: 'https://g.co/kgs/MpHqZQc',
      title: 'Software Developer Intern',
      range: 'Dec 2024 - Feb 2025',
      responsibilities: [
        ' Developed a Python-based automation tool to generate and compile barcoded vouchers into PDFs, processing approximately 200,000 vouchers for major clients such as Ace Hardware, Pepper Lunch, Chatime, Toys Kingdom, and Starbucks',
        'Utilized Pandas to read and process data from Excel spreadsheets dynamically',
        'Optimized manual voucher processing by 80%, reducing human effort and error',
        'Developed custom indexing logic tailored to customer requirements for distributing different voucher categories',
      ]
    },
    {
      company: 'Simian Technologies',
      url: 'https://www.simian.co.id/',
      title: 'Data Management Developer Intern',
      range: 'Aug 2024 - Nov 2024',
      responsibilities: [
        'Developed backend features in Java using Spring Boot, handling requests from a PHP frontend to generate downloadable, customer-specific PDF documents.',
        'Executed PostgreSQL queries to customize user data retrieval, improving the accuracy of generated reports.',
        'Created DTOs and service classes to ensure clean architecture and reliable data flow for document rendering.',
        'Automated HTML-to-PDF generation using Playwright, cutting manual workload by 30%.',
        'Utilized Docker for environment consistency and Maven for efficient build and dependency management.',
        'Participated in code reviews and documentation to support maintainable and secure code.'
      ]
    },
    {
      company: 'Metalogic Infomitra',
      url: 'https://metalogicinfo.com/',
      title: 'Frontend Developer Intern',
      range: 'Apr 2024 - Aug 2024',
      responsibilities: [
        'Rebuilt the corporate banking web application using Vue, transforming a legacy system into a scalable SPA.',
        'Implemented mobile-first designs and responsive components using Tailwind CSS and Vue Router.',
        'Refactored legacy code into reusable modules, enhancing maintainability and reducing duplication.',
        'Collaborated with backend teams on API integration and secured data access.'
      ]
    }
  ];

  // Reset tabs when the data changes
  useEffect(() => {
    tabs.current = tabs.current.slice(0, experienceData.length);
    
    // Make sure activeTabId is valid
    if (activeTabId >= experienceData.length) {
      setActiveTabId(0);
    }
    
    // Reset tabFocus if it's no longer valid
    if (tabFocus !== null && tabFocus >= experienceData.length) {
      setTabFocus(null);
    }
  }, [experienceData.length, activeTabId, tabFocus]);

  // Focus handling for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (tabFocus !== null) {
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setTabFocus(tabFocus === 0 ? experienceData.length - 1 : tabFocus - 1);
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setTabFocus(tabFocus === experienceData.length - 1 ? 0 : tabFocus + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [tabFocus, experienceData.length]);

  // Effect for changing tab focus
  useEffect(() => {
    if (tabFocus !== null && tabs.current[tabFocus]) {
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
      <div className="min-h-[340px] flex flex-col md:flex-row overflow-visible">
        <div className="relative flex md:block md:w-max">
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
              top: activeTabId * 42, 
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
              <h3 className="text-xl font-medium text-[var(--lightest-slate)] inline-flex flex-wrap">
                <span>{item.title}</span>{' '}
                <span className="text-[var(--green)]">
                  &nbsp;@&nbsp; <a href={item.url} className="inline-link" target="_blank" rel="noopener noreferrer">
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
                    <div className="text-[var(--green)] mr-2 pt-1 flex-shrink-0">▹</div>
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