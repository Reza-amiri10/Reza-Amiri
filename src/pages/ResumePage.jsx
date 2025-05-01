import React, { useState, useEffect } from "react";
import "../assets/styles/ResumePage.css";
import ResumeWhiteCard from "../components/ResumeWhiteCard";
import SkillsCard from "../components/SkillsCard";

export default function ResumePage() {
  return (
    <div className="resume-continer">
      <div>
        <h1> ⃣ Resume</h1>
      </div>

      <div className="all-resume-titles">
        <h1>Experience</h1>
        <button>Download</button>
      </div>

      <ResumeWhiteCard
        jYear="Present"
        jPosition="Volunteer / English Teacher"
        cName="HO & Church"
        cLocation="Turkey"
        expText="I am Teaching English to refugees as part of an ESL (English as a Second Language) program."
      />
        <ResumeWhiteCard
        jYear="2020 - Present"
        jPosition="Freelance / Translator"
        cName="Freelance"
        cLocation="Remote"
        expText="Provide translation services for various clients, ensuring high accuracy and cultural relevance."
      />
    <ResumeWhiteCard
        jYear="2020 - Present"
        jPosition="Leadership"
        cName="CL & VC"
        cLocation="Turkey"
        expText="Led and supported community initiatives, including youth mentorship, humanitarian outreach, and church-based programs."
      />
       <ResumeWhiteCard
        jYear="2020 - 2021"
        jPosition="Manager"
        cName="RT"
        cLocation="Sinop Turkey"
        expText="Managed residential and commercial construction projects from design through completion, ensuring quality, budget, and timeline adherence.
Supervised cross-functional teams, coordinated with clients, architects, and contractors, and ensured compliance with building codes and safety standards.
Oversaw procurement, budgeting, and scheduling, resulting in successful on-time and within-budget project delivery."
      />
        <ResumeWhiteCard
        jYear="2016 - 2018"
        jPosition="Shoe Color Designer"
        cName="Jalilian Shoes Company"
        cLocation="Iran"
        expText="Designed and developed color patterns for shoe products."
      />

      <div className="all-resume-titles">
        <h1>Education</h1>
      </div>
      <ResumeWhiteCard
        jYear="2023 - Present"
        jPosition=" Studying Software Engineering"
        cName=""
        cLocation="Online education"
        expText=""
      />
        <ResumeWhiteCard
        jYear="2023 - Present"
        jPosition=" Studying Software Engineering"
        cName=""
        cLocation="Online education"
        expText=""
      />
        <ResumeWhiteCard
        jYear="2024"
        jPosition="LET"
        cName=""
        cLocation="Turkey"
        expText=" Three weeks Leadership English Teaching  (LET) camp organized and supported by Americancouncil and US Department of State."
      />
      <div className="all-resume-titles">
        <h1>Skills</h1>
      </div>

      <SkillsCard />
    </div>
  );
}
