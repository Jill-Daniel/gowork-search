import React from "react";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-header"
      >
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">We’re here to connect you with the right service or answer your questions!</p>
      </motion.div>

      <div className="contact-content">
        {/* Contact Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="info-box">
            <FiPhone className="info-icon" />
            <span>Phone: 0107451983</span>
          </div>
          <div className="info-box">
            <FiMail className="info-icon" />
            <span>Email: support@goworksearch.com</span>
          </div>
          <div className="info-box">
            <FiMapPin className="info-icon" />
            <span>Location: Nairobi, Kenya</span>
          </div>
          <a
            href="https://wa.me/254107451983"
            target="_blank"
            rel="noopener noreferrer"
            className="info-box whatsapp-link"
          >
            <FaWhatsapp className="info-icon" />
            <span>Chat with us on WhatsApp</span>
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Type your message..." required></textarea>
          </div>
          <motion.button
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            <FiSend className="btn-icon" /> Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Embedded Map */}
      <motion.div
        className="map-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <iframe
          title="GoWork Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.138496249128!2d36.8167!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d3f4b0d3e3%3A0x5b0953a3f18c6d!2sNairobi!5e0!3m2!1sen!2ske!4v1700000000000"
          width="100%"
          height="300"
          style={{ border: "0", borderRadius: "12px", marginTop: "40px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* CTA Section */}
      <div className="cta-section">
        <h3>Need Help Finding a Worker?</h3>
        <p>Let us help you get matched with trusted professionals today!</p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="cta-button"
          href="https://wa.me/254107451983"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiArrowRight /> Contact Us Now
        </motion.a>
      </div>
    </div>
  );
}

export default Contact;
