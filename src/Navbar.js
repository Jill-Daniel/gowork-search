
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">GoWork<span>-Search</span></Link>
      </div>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {["/", "/about", "/services", "/join", "/admindashboard", "/login", "/contact"].map((path, i) => (
          <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>{path === "/" ? "Home" : path.replace("/", "")}</NavLink>
        ))}
      </nav>
      <button className="burger" onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
    </header>
  );
};

export default Navbar;