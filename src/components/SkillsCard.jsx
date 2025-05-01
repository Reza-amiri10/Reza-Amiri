import React, { useState, useEffect } from "react";
import "../assets/styles/Skills.css";

export default function SkillsCard(props) {
  return (
    <div className="skills-box">
      <div className="professional-skills">
        <h1>Professional skills:</h1>
        <div className="skills-list">
          <ul>
          <li>Problem Solving 
          </li>
            <li>Cultural Awareness</li>
            <li>Excellent Listening Abilities</li>
            <li>Written Translation </li>
            <li>Management</li>
            <li>Leadership</li>
            <li>Teaching</li>
            <li>Understanding Technology  
            </li>
            <li>Eager to Learn New Skills  
            </li>Great Communication Skills
            <li>Kind and respectful

            </li>
            <li>Problem Solving 
            </li>

          </ul>
        </div>
      </div>
      <div className="languages">
        <h1> Languages:</h1>
        <div className="languages-list">
          <ul>
            <li>Fluent in English
            </li>
            <li>Fluent in Turkish
            </li>
            <li>Native Persian</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
