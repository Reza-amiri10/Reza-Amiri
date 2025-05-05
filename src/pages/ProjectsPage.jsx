import React from "react";
import "../assets/styles/ProjectsPage.css";
import ProjectCard from "../components/ProjectCard";
import Logo from "../components/Logo/Logo"


export default function ProjectsPage() {
  return (
    <div className="projects-continer">
      <div className="logo-title">
        <Logo />
        <h1>Projects</h1>
      </div>
      
      <div className="about-projects">
        <p>
          I'm a full-stack web developer open to work with any kind of sofware based project I am looking forward to work with you.
        </p>
      </div>
      <ProjectCard
        pName="Project name 01"
        rTitle="Role Title"
        pText="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        img="/images/Project-exp-1.png"
      />
      <ProjectCard
        pName="Project name 02"
        rTitle="Role Title"
        pText="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        img="/images/Phone-img.png"
      />
    </div>
  );
}
