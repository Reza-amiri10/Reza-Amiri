import React from "react";
import "./SMLogo.css";

export default function SMLogo(props) {
  return (
    <div className="sm-logo">
      <img src={props.img} />
    </div>
  );
}
