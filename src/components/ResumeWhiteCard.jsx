import React, { useState, useEffect } from "react";
import "../assets/styles/ResumeWhiteCard.css";

export default function ResumeWhiteCard(props) {
  return (
    <div className="resume-box">
      <div className="resume-card-titles">
        <h1>{props.jYear}</h1>
        <h2>{props.jPosition}</h2>
        <h3>{props.cName}</h3>
        <h3>{props.cLocation}</h3>
      </div>
      <div className="explanition-tex">
        <p>{props.expText}</p>
      </div>
    </div>
  );
}
