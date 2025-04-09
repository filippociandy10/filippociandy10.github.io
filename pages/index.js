import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Volunteer from '../components/sections/Volunteer';

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  return (
    <>
      <Hero />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.section id="about" variants={fadeUp}>
          <About />
        </motion.section>
        
        <motion.section id="experience" variants={fadeUp}>
          <Experience />
        </motion.section>

        <motion.section id="volunteer" variants={fadeUp}>
          <Volunteer />
        </motion.section>

        <motion.section id="projects" variants={fadeUp}>
          <Projects />
        </motion.section>
        
        <motion.section id="contact" variants={fadeUp}>
          <Contact />
        </motion.section>
      </motion.div>
    </>
  );
}