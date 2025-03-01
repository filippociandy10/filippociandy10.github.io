// components/ui/Section.jsx
import React from 'react';

const Section = ({ 
  children, 
  id, 
  number,
  title,
  className = '' 
}) => {
  return (
    <section 
      id={id}
      className={`px-6 py-24 md:py-32 max-w-6xl mx-auto ${className}`}
    >
      {title && (
        <h2 className="flex items-center font-semibold text-2xl md:text-3xl text-[var(--lightest-slate)] mb-12">
          {number && (
            <span className="text-[var(--green)] font-mono mr-2 text-xl md:text-2xl">
              {number}.
            </span>
          )}
          {title}
        </h2>
      )}
      
      {children}
    </section>
  );
};

export default Section;