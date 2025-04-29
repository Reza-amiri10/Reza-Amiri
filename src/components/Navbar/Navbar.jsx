import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          ⃣ Reza Amiri
        </Link>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          ABOUT ME
        </Link>
        <Link to="/resume" onClick={closeMenu}>
          RESUME
        </Link>
        <Link to="/projects" onClick={closeMenu}>
          PROJECTS
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          CONTACT
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "change" : ""}`}></div>
        <div className={`bar ${menuOpen ? "change" : ""}`}></div>
        <div className={`bar ${menuOpen ? "change" : ""}`}></div>
      </div>
    </nav>
  );
}
