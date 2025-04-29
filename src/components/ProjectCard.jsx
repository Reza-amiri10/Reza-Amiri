import React from "react";
import "../assets/styles/ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="projdect-box">
      <div class="project-title">
        <h3>{props.pName}</h3>
        <h4>{props.rTitle}</h4>
        <p>{props.pText}</p>
      </div>
      <div className="project-img">
        <img id="project-img" src={props.img} />
      </div>
    </div>
  );
}
