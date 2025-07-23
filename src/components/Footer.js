import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>GoWork Search</h2>
          <p>Connecting professionals with opportunities across Kenya.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/join">Join Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form onSubmit={handleSubscribe}>
            <input type="email" placeholder="Enter your email" value={email} required onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GoWork Search. All rights reserved.</p>
      </div>

      <button className="back-to-top" onClick={handleScrollTop}><FaArrowUp /></button>
    </footer>
  );
}

export default Footer;

