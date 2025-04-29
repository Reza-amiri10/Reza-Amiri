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
        jYear="2035 - Present"
        jPosition="JOB POSITION"
        cName="Company Name"
        cLocation="Company Location"
        expText="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
      />
      <div className="all-resume-titles">
        <h1>Education</h1>
      </div>
      <ResumeWhiteCard
        jYear="2035 - Present"
        jPosition="JOB POSITION"
        cName="Company Name"
        cLocation="Company Location"
        expText="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
      />

      <div className="all-resume-titles">
        <h1>Skills</h1>
      </div>

      <SkillsCard />
    </div>
  );
}
