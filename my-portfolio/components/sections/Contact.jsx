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
      // Normally you would send data to an API here
      // This is a placeholder for demonstration
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
          Get In Touch
        </h2>
        
        <p className="text-lg text-[var(--slate)] mb-12">
          I'm currently looking for new opportunities. Whether you have a question, a project 
          proposal, or just want to say hello, my inbox is always open. I'll do my best to get 
          back to you as soon as possible!
        </p>
        
        {formStatus.submitted && formStatus.success ? (
          <motion.div 
            className="bg-[var(--light-navy)] p-8 rounded text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="text-[var(--green)] mx-auto mb-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-2xl font-bold text-[var(--lightest-slate)] mb-2">Message Sent!</h3>
            <p className="text-[var(--light-slate)]">
              Thank you for reaching out. I'll get back to you soon!
            </p>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeInUpVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-left text-[var(--lightest-slate)] font-medium mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--light-navy)] border border-[var(--lightest-navy)] rounded p-3 text-[var(--lightest-slate)] focus:outline-none focus:border-[var(--green)]"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-left text-[var(--lightest-slate)] font-medium mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--light-navy)] border border-[var(--lightest-navy)] rounded p-3 text-[var(--lightest-slate)] focus:outline-none focus:border-[var(--green)]"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-left text-[var(--lightest-slate)] font-medium mb-2">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                value={formState.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full bg-[var(--light-navy)] border border-[var(--lightest-navy)] rounded p-3 text-[var(--lightest-slate)] focus:outline-none focus:border-[var(--green)]"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            {formStatus.error && (
              <div className="bg-red-900/20 border border-red-800 text-red-100 p-3 rounded">
                {formStatus.error}
              </div>
            )}
            
            <motion.button 
              type="submit"
              className="inline-block font-mono text-[var(--green)] border border-[var(--green)] rounded px-8 py-4 hover:bg-[rgba(100,255,218,0.1)] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        )}
        
        <motion.div 
          className="mt-16"
          variants={fadeInUpVariants}
        >
          <p className="text-[var(--slate)] mb-4">
            Prefer a direct approach?
          </p>
          <a 
            href="mailto:your.email@example.com" 
            className="inline-block font-mono text-[var(--green)] border border-[var(--green)] rounded px-8 py-4 hover:bg-[rgba(100,255,218,0.1)] transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Contact