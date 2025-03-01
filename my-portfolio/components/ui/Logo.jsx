import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link href="/">
        <motion.div
          className="relative font-mono text-2xl text-[var(--green)]"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 40 40"
            style={{ display: 'block' }}
          >
            <polygon
              points="20,0 40,20 20,40 0,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            {/* Replace YN with your own initials or personalized logo */}
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="currentColor"
              style={{ 
                font: "bold 16px var(--font-mono)", 
                letterSpacing: "-1px" 
              }}
            >
              YN
            </text>
          </svg>
        </motion.div>
    </Link>
  );
};

export default Logo;