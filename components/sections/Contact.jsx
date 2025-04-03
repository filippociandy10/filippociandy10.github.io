import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log('Form submitted:', formState);
      
      // Simulate successful form submission
      setFormStatus({
        submitted: true,
        success: true,
        error: null,
      });
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        message: '',
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: true,
        success: false,
        error: 'There was an error sending your message. Please try again.',
      });
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  return (
    <Section id="contact" number="04" title="What's Next?" fullHeight={false}>
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--lightest-slate)] mb-6">
          Lets Connect!
        </h2>
        
        <p className="text-lg text-[var(--slate)] mb-12">
          I’m always open to new conversations—whether it's about opportunities, collaborations, or just a quick hello. Drop me a message, and I’ll reply as soon as I can!
        </p>
        
        <motion.div 
          className="mt-16"
          variants={fadeInUpVariants}
        >
          <p className="text-[var(--slate)] mb-4">
          Like to keep it simple?
          </p>
          <a 
            href="mailto:filippo.ciandy10@gmail.com" 
            className="inline-block font-mono text-[var(--green)] border border-[var(--green)] rounded px-8 py-4 hover:bg-[rgba(100,255,218,0.1)] transition-colors"
          >
            Begin conversation
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Contact