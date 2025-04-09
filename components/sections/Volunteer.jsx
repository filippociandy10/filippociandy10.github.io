import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section'

const Volunteer = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  
  const volunteerData = [
    {
      organization: 'Blueprint Chapter UAlberta',
      url: 'https://www.linkedin.com/company/uofa-blueprint/',
      title: 'Project Manager',
      range: 'May 2022 - May 2023',
      responsibilities: [
        'Led a cross-functional team of developers and designers to deliver a full-stack native application for a nonprofit organization.',
        'Facilitated Agile ceremonies including sprint planning, standups, retrospectives, and stakeholder demos.',
        'Coordinated project timelines, task allocation, and team collaboration using GitHub Projects.',
        'Maintained consistent communication with the client to gather requirements, manage expectations, and deliver milestones.',
        'Ensured code quality and timely delivery through peer reviews, QA testing, and continuous integration practices.'
      ]
    },
    {
        organization: 'Skillcity Institute',
        url: 'https://skillcity.ca/',
        title: 'Fullstack Developer',
        range: 'Jan 2023 - Apr 2023',
        responsibilities: [
            'Developed user-facing features with Next.js and built REST APIs with Django for a student opportunity platform.',
            'Containerized the application using Docker to streamline development, testing, and deployment across environments.',
            'Wrote and maintained unit and E2E tests using Jest and Cypress, improving app stability.',
            'Implemented end-to-end tests using Cypress to validate user flows and ensure application reliability.'
        ]
    }
  ];

  // Reset tabs when the data changes
  useEffect(() => {
    tabs.current = tabs.current.slice(0, volunteerData.length);
    
    // Make sure activeTabId is valid
    if (activeTabId >= volunteerData.length) {
      setActiveTabId(0);
    }
    
    // Reset tabFocus if it's no longer valid
    if (tabFocus !== null && tabFocus >= volunteerData.length) {
      setTabFocus(null);
    }
  }, [volunteerData.length, activeTabId, tabFocus]);

  // Focus handling for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (tabFocus !== null) {
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setTabFocus(tabFocus === 0 ? volunteerData.length - 1 : tabFocus - 1);
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setTabFocus(tabFocus === volunteerData.length - 1 ? 0 : tabFocus + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [tabFocus, volunteerData.length]);

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
    <Section id="volunteer" number="03" title="Pro Bono Projects">
      <div className="min-h-[340px] flex flex-col md:flex-row overflow-visible">
        <div className="relative flex md:block md:w-max">
          <div className="flex md:flex-col w-max border-b md:border-b-0 md:border-l border-[var(--lightest-navy)]">
            {volunteerData.map((item, i) => (
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
                {item.organization}
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
          {volunteerData.map((item, i) => (
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
                    {item.organization}
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

export default Volunteer;