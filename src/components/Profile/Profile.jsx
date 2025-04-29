import React from "react";
import "./Profile.css";

export default function ProfileImage(props) {
  return (
    <div className="profile-img">
      <img src={props.img} />
    </div>
  );
}
