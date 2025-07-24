import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Images
import electrician from "../images/electrician2.jpg";
import plumber from "../images/plumber.jpg";
import barber from "../images/baba.jpg";
import carpenter from "../images/capenters.jpg";
import handyman from "../images/handyman.jpg";
import nurse from "../images/nursing.jpg";
import welding from "../images/welding.jpg";
import render from "../images/rander.jpg";
import mabati from "../images/mabati.jpg";
import tech from "../images/clothes.jpg";

export default function Services() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate(); // 🚀 Add this

  const servicesData = [
    { id: 1, title: "Electrician", image: electrician, category: "Technology" },
    { id: 2, title: "Computer Repair", image: tech, category: "Technology" },
    { id: 3, title: "Plumber", image: plumber, category: "Professional" },
    { id: 4, title: "Barber", image: barber, category: "Personal Care" },
    { id: 5, title: "Carpentry", image: carpenter, category: "Professional" },
    { id: 6, title: "Handyman", image: handyman, category: "Professional" },
    { id: 7, title: "Nurse at Home", image: nurse, category: "Health" },
    { id: 8, title: "Welder", image: welding, category: "Professional" },
    { id: 9, title: "House Rendering", image: render, category: "Construction" },
    { id: 10, title: "Mabati Installation", image: mabati, category: "Construction" },
  ];

  const categories = ["All", ...new Set(servicesData.map(s => s.category))];

  const filtered = servicesData.filter(
    s =>
      (selectedCategory === "All" || s.category === selectedCategory) &&
      s.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleViewWorkers = (serviceTitle) => {
    navigate(`/services/${encodeURIComponent(serviceTitle)}`); // 🚀 Pass title as route param
  };

  return (
    <section className="services-section">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore Our Services
      </motion.h2>

      <motion.div
        className="filter-search"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <input
          type="text"
          placeholder="Search a service..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />

        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="services-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {filtered.length > 0 ? (
          filtered.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-info">
                <h3>{service.title}</h3>
                <p className="category">{service.category}</p>
                <button
                  className="book-btn"
                  onClick={() => handleViewWorkers(service.title)}
                >
                  View Workers
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="no-results">No matching services found.</p>
        )}
      </motion.div>
    </section>
  );
}
