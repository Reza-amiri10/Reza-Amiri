import React from "react";
import "../assets/styles/ContactPage.css";
import ContactCard from "../components/ContactCard";
import Logo from "../components/Logo/Logo"

export default function ContactPage() {
  return (
    <div className="contact-continer">
      <div className="logo-title">
        <Logo />
        <h1>Contact Me</h1>
      </div>
      <ContactCard />
    </div>
  );
}
