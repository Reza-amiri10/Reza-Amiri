import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="projects-continer">
      <div className="project-them">
        <h3>■ Crafted with Code, Driven by Passion ■</h3>
        <p>
          Over the years, I've dedicated myself to building clean, responsive,
          and user-focused applications — each project a reflection of hard work
          and constant learning. Here are just a few examples of what I’ve
          built. Every line of code represents a challenge overcome, a problem
          solved, and a product made better. Your project could be the next one
          I’m proud to bring to life — and it would be a pleasure to work with
          you.
        </p>
      </div>
      <div className="project-box">
        <img alt="website template" src="/images/project4.png"></img>
      </div>

      <div className="project-box">
        <img alt="website template" src="/images/project2.jpg"></img>
      </div>
      <div className="project-box">
        <img
          alt="website template"
          src={!isHover ? "/images/project3.jpg" : "/images/project44.png"}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        ></img>
      </div>
      <div className="project-box">
        <img alt="website template" src="/images/project1.png"></img>
      </div>
    </div>
  );
}
