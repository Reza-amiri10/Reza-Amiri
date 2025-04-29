import React from "react";
import "../assets/styles/ContactPage.css";
import ContactCard from "../components/ContactCard";

export default function ContactPage() {
  return (
    <div className="contact-continer">
      <h1> ⃣ Contact Me</h1>
      <ContactCard />
    </div>
  );
}
