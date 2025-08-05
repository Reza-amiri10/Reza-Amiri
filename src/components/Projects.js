import "./Projects.css";
import Project1 from "./project1.png";
import Project2 from "./project2.png";
import Project3 from "./project3.png";

export default function Projects() {
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
        <img alt="website template" src={Project1}></img>
      </div>
      <div className="project-box">
        <img alt="website template" src={Project2}></img>
      </div>
      <div className="project-box">
        <img alt="website template" src={Project3}></img>
      </div>
      <div className="project-box">
        <img alt="website template" src={Project1}></img>
      </div>
      <div className="project-box">
        <img alt="website template" src={Project2}></img>
      </div>
      <div className="project-box">
        <img alt="website template" src={Project3}></img>
      </div>
    </div>
  );
}
