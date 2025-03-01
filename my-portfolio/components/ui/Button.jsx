import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  href, 
  type = 'primary', 
  size = 'medium',
  target,
  onClick,
  className,
  ...props 
}) => {
  const baseClasses = "inline-block font-mono rounded border border-[var(--green)] text-center transition-all";
  
  const typeClasses = {
    primary: "text-[var(--green)] hover:bg-[rgba(100,255,218,0.1)]",
    secondary: "bg-[var(--green)] text-[var(--navy)] hover:bg-transparent hover:text-[var(--green)]"
  };
  
  const sizeClasses = {
    small: "px-3 py-2 text-sm",
    medium: "px-6 py-3",
    large: "px-8 py-4 text-lg"
  };
  
  const buttonClasses = `${baseClasses} ${typeClasses[type]} ${sizeClasses[size]} ${className || ''}`;
  
  const buttonMotion = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 }
  };
  
  // If it's an internal link (starts with / or #)
  if (href && (href.startsWith('/') || href.startsWith('#'))) {
    return (
      <Link 
        href={href} 
        className={buttonClasses}
        {...props}
      >
        <motion.span
          {...buttonMotion}
          className="inline-block w-full h-full"
        >
          {children}
        </motion.span>
      </Link>
    );
  }
  
  // If it's an external link or an onClick handler
  if (href || onClick) {
    return (
      <motion.a 
        href={href} 
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={buttonClasses}
        onClick={onClick}
        {...buttonMotion}
        {...props}
      >
        {children}
      </motion.a>
    );
  }
  
  // If it's a regular button
  return (
    <motion.button 
      className={buttonClasses}
      {...buttonMotion} 
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;