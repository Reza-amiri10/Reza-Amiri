import React, { useState } from "react";
import Profile from "./pro.jpeg";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="profile">
        <img alt="profile" src={Profile} />
        <div className="iam">
          <p className="reza">I'm Reza.</p>
          <p className="dev">Developer</p>
        </div>
      </div>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={`list-item ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
