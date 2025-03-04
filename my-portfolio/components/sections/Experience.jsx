import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section'

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  
  const experienceData = [
    {
      company: 'Metalogic Infomitra',
      url: 'https://metalogicinfo.com/',
      title: 'Frontend Developer',
      range: 'Nov 2024 - Jan 2025',
      responsibilities: [
        'Rebuilt the frontend of a local Indonesian bank\'s web application, transitioning from HTML+CSS injection to a Vue.js-based architecture for improved maintainability and scalability',
        'Redesigned the UI to be fully responsive, implementing mobile friendly design principles using Vue.js and modern CSS frameworks, ensuring smooth user experience across devices',
        'Refactored legacy code into modular Vue components, improving code reusability and reducing duplication by 50%',
        'Collaborated with backend teams, ensuring smooth API integration and secure data handling within Vue.js components',
        'Optimized UI performance, reducing load times through lazy loading, computed properties, and efficient reactivity handling',
        'Implemented Vue Router and Vuex, enhancing navigation and state management while eliminating reliance on outdated inline scripts'
      ]
    },
    {
      company: 'Simian Technologies',
      url: 'https://www.simian.co.id/',
      title: 'Data Management Developer',
      range: 'Aug 2024 - Oct 2024',
      responsibilities: [
        'Developed a Java feature to handle user requests from the PHP frontend generating downloadable PDFs with customer-specific data',
        'Executed PostgreSQL queries to retrieve, transform, and organize user-specific data, ensuring accuracy and customization in document generation',
        'Designed and implemented Data Transfer Objects (DTOs) to facilitate smooth data flow between the backend and the HTML-toPDF generation process',
        'Automated HTML-to-PDF generation using Playwright, leveraging database-driven data for dynamic HTML population, reducing manual reporting effort by 30%',
        'Utilized Docker containerization for feature development, ensuring a consistent and reproducible environment across teams',
        'Utilized Maven for project build automation and dependency management, ensuring efficient integration of backend features with the PHP frontend'
      ]
    },
    {
      company: 'Unindo Niaga Pratama',
      url: 'https://g.co/kgs/MpHqZQc',
      title: 'Software Developer',
      range: 'May 2024 - Jul 2024',
      responsibilities: [
        ' Developed a Python-based automation tool to generate and compile barcoded vouchers into PDFs, processing approximately 200,000 vouchers for major clients such as Ace Hardware, Pepper Lunch, Chatime, Toys Kingdom, and Starbucks',
        'Utilized Pandas to read and process data from Excel spreadsheets dynamically',
        'Optimized manual voucher processing by 80%, reducing human effort and error',
        'Developed custom indexing logic tailored to customer requirements for distributing different voucher categories',
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
          {/* Removed the overflow-x-auto class */}
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