import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import plum from "../images/electrician2.jpg";
import plam from "../images/plumber.jpg";
import baba from "../images/baba.jpg";
import capenter from "../images/capenters.jpg";
import handyman from "../images/handyman.jpg";
import health from "../images/nursing.jpg";
import welding from "../images/welding.jpg";
import randa from "../images/rander.jpg";
import mabati from "../images/mabati.jpg";


export default function Home() {
  const [counts, setCounts] = useState({ workers: 0, clients: 0, jobs: 0 });
  const [currentBg, setCurrentBg] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const bgImages = [plum, plam, baba, capenter, handyman, health, welding, randa, mabati];

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounts((prev) => ({
        workers: Math.min(prev.workers + 3, 8725),
        clients: Math.min(prev.clients + 2, 1540),
        jobs: Math.min(prev.jobs + 4, 11260),
      }));
    }, 30);

    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 4000);

    const landingTimer = setTimeout(() => setShowLanding(false), 2500);

    return () => {
      clearInterval(counterInterval);
      clearInterval(bgInterval);
      clearTimeout(landingTimer);
    };
  }, []);

  const skills = [
    { title: "Electrician", image: plum },
    { title: "Plumber", image: plam },
    { title: "Barber", image: baba },
    { title: "Carpenter", image: capenter },
    { title: "Handyman", image: handyman },
    { title: "Health Worker", image: health },
    { title: "Welder", image: welding },
    { title: "Painter", image: randa },
    { title: "Roof Expert", image: mabati },
  ];

  const testimonials = [
    { text: "This platform helped me get work every week. Highly recommend!", name: "Peter M., Plumber" },
    { text: "Finding skilled help for my construction project has never been easier.", name: "Susan K., Homeowner" },
    { text: "A reliable place to find professional workers anytime!", name: "James N., Business Owner" },
    { text: "As a nurse, I found clients faster through GoWork Search than any other method.", name: "Faith L., Health Worker" },
  ];

  if (showLanding) {
    return (
      <div className="landing-screen">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="landing-text"
        >
          Welcome to GoWork Search
        </motion.h1>
      </div>
    );
  }

  return (
    <main className={`home-container ${darkMode ? "dark" : ""}`}>
      <button onClick={() => setDarkMode(!darkMode)} className="dark-toggle">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <section className="hero" style={{ backgroundImage: `url(${bgImages[currentBg]})` }}>
        <div className="overlay" />
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h3 className="tt">GoWork Search: Trusted Talent. Instant Results.</h3>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h4 className="tt-1">Discover skilled professionals near you — plumbers, electricians, health experts, and more.</h4>
        </motion.p>
        <motion.div className="hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Link to="/services"><button className="btn-orange">Hire a worker</button></Link>
          <Link to="/join"><button className="btn-outline">Join as a Worker</button></Link>
        </motion.div>
      </section>

      <section className="skills-section">
        <h2>Some of the works</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div className="skill-card" key={i} whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <img src={skill.image} alt={skill.title} className="animated-skill-image" />
              <p>{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="stats">
        <div className="stat-box"><h3>{counts.workers}+</h3><p>Registered Workers</p></div>
        <div className="stat-box"><h3>{counts.clients}+</h3><p>Happy Clients</p></div>
        <div className="stat-box"><h3>{counts.jobs}+</h3><p>Jobs Completed</p></div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-boxes">
          {testimonials.map((t, i) => (
            <motion.div className="testimonial" key={i} whileHover={{ scale: 1.02 }}>
              <p>"{t.text}"</p>
              <h4>– {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>How do I hire a worker?</h4>
          <p>Simply click "Browse Services", choose the category, and contact the listed workers.</p>
        </div>
        <div className="faq-item">
          <h4>Can I join as a service provider?</h4>
          <p>Yes! Click "Join as a Worker", fill the form, and get verified quickly.</p>
        </div>
        <div className="faq-item">
          <h4>Is it free to use?</h4>
          <p>Yes, both clients and service providers can register and connect for free.</p>
        </div>
      </section>

      <section className="newsletter">
        <h2>Stay Updated!</h2>
        <p>Subscribe to get updates on new services and workers.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section className="contact-cta">
        <h2>Need Help or Have a Question?</h2>
        <p>We’re here to assist you anytime. Get in touch with us today.</p>
        <Link to="/contact">
          <button className="btn-orange">Contact Us</button>
        </Link>
      </section>

      <a href="https://wa.me/254712345678" className="whatsapp-float" target="_blank" rel="noopener noreferrer">💬</a>
    </main>
  );
}
