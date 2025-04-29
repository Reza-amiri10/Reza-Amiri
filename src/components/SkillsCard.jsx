import React, { useState, useEffect } from "react";
import "../assets/styles/Skills.css";

export default function SkillsCard(props) {
  return (
    <div className="skills-box">
      <div className="professional-skills">
        <h1>Professional skills:</h1>
        <div className="skills-list">
          <ul>
            <li>Entrepreneurial Mindset</li>
            <li>Go-to-Market Planning</li>
            <li>Teamwork & Collaboration</li>
            <li>Digital Analytics</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="languages">
        <h1> Languages:</h1>
        <div className="languages-list">
          <ul>
            <li>English (native)</li>
            <li>French (proficient)</li>
            <li>Spanish (proficient)</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
