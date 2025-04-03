import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiCodepen, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub />,
      url: 'https://github.com/filippociandy10',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      url: 'https://www.linkedin.com/in/filippociandy/',
    },
    {
      name: 'Instagram',
      icon: <FiInstagram />,
      url: 'https://instagram.com/filippociandy',
    },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer 
      className="py-6 px-4 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariants}
    >
      <div className="max-w-6xl mx-auto">
        <ul className="flex justify-center space-x-6 mb-6">
          {socialLinks.map(({ name, icon, url }) => (
            <li key={name}>
              <motion.a
                href={url}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--light-slate)] hover:text-[var(--green)] transition-colors text-xl block"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </motion.footer>
  );
};

export default Footer;