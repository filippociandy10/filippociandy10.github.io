"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading to show animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="layout">
      <Head>
        <title>Your Name | Developer</title>
        <meta name="description" content="Personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'var(--navy)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ color: 'var(--green)', fontSize: '32px', fontFamily: 'var(--font-mono)' }}>YN</div>
          </motion.div>
        </motion.div>
      ) : (
        <>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;