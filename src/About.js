import React from 'react';
import { motion } from 'framer-motion';
import photo from '../images/jill.jpg';


const fadeIn = (direction = 'up', delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, delay },
    },
  };
  return variants;
};

function About() {
  return (
    <motion.div 
      className="about-container"
      initial="hidden"
      animate="visible"
      variants={fadeIn('up')}
    >
      {/* MAIN HEADING */}
      <motion.h1 
        className="about-title"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        About GoWork Search
      </motion.h1>

      {/* HERO SECTION */}
      <motion.div 
        className="about-hero"
        variants={fadeIn('left', 0.2)}
      >
        <img src={photo} alt="Founder" className="founder-img" />
        <motion.div className="hero-text" variants={fadeIn('right', 0.4)}>
          <h2>Meet the Founder</h2>
          <p>
            I'm <strong>Jill Daniel</strong>, the founder of <strong>GoWork Search</strong>. This platform was born to uplift every skilled individual in Kenya and beyond — from mama fua to engineers. You deserve opportunity and dignity.
          </p>
        </motion.div>
      </motion.div>

      {/* MISSION & VISION */}
      <div className="mission-vision-section">
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3>Our Mission</h3>
          <p>To connect skilled individuals with the right clients efficiently, securely, and transparently.</p>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3>Our Vision</h3>
          <p>To be Africa’s #1 job-matching platform, trusted by both clients and workers from all backgrounds.</p>
        </motion.div>
      </div>

      {/* WHY CHOOSE US */}
      <motion.div className="why-choose-us" variants={fadeIn('up', 0.4)}>
        <h2>Why GoWork Search?</h2>
        <ul>
          <li>✅ Instant matching with trusted service providers</li>
          <li>✅ Easy booking, contact, and support</li>
          <li>✅ Available across professions & skill levels</li>
          <li>✅ Built by Africans, for Africa 🇰🇪</li>
        </ul>
      </motion.div>

      {/* TESTIMONIALS */}
      <motion.div className="testimonials" variants={fadeIn('up', 0.5)}>
        <h2>What People Say</h2>
        <div className="testimonial-slider">
          <motion.div className="testimonial-card" whileHover={{ scale: 1.02 }}>
            <p>"I found a reliable electrician in just 10 minutes! GoWork is a game changer."</p>
            <span>- Grace, Nairobi</span>
          </motion.div>
          <motion.div className="testimonial-card" whileHover={{ scale: 1.02 }}>
            <p>"As a plumber, this site has helped me grow my client base fast."</p>
            <span>- Martin, Eldoret</span>
          </motion.div>
          <motion.div className="testimonial-card" whileHover={{ scale: 1.02 }}>
            <p>"It's fast, beautiful, and trustworthy. Highly recommended!"</p>
            <span>- Anita, Mombasa</span>
          </motion.div>
        </div>
      </motion.div>

      {/* CONTACT CTA */}
      <motion.div className="contact-cta" variants={fadeIn('up', 0.3)}>
        <h2>Ready to Get Started?</h2>
        <a href="/contact" className="cta-button">Contact Us Now</a>
      </motion.div>
    </motion.div>
  );
}

export default About;
