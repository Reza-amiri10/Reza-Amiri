import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../components/Profile/Profile";
import "../assets/styles/About.css";

export default function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="profile-continer">
      <div className="profile">
        <div className="profile-box">
          <div className="profile-image-title">
            <ProfileImage img="/images/my-profile.png" />
            <h2>Reza Amiri</h2>
            <h1>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</h1>
            <h3>Full-stack Developer</h3>
            {windowWidth < 680 ? (
              <div className="resume-project-btn">
                <button>
                  <Link to="/resume">RESUME</Link>
                </button>
                <button>
                  <Link to="/projects">PROJECTS</Link>
                </button>
              </div>
            ) : (
              ""
            )}
            <div className="social-media-contact">
              <a href="#">
                <img src="/images/facebook.png" />
              </a>
              <a href="https://x.com/reza19184310">
                <img src="/images/x.png" />
              </a>
              <a href="https://www.linkedin.com/in/reza-amiri-4362b8335/">
                <img src="/images/linkden.png" />
              </a>
              <a href="#">
                <img src="/images/insta.png" />
              </a>
            </div>
          </div>
        </div>

        <div className="profile-bio">
          <h1>Hello</h1>
          <h3>Who I am & what I do</h3>
          {windowWidth > 680 ? (
            <div className="resume-project-btn">
              <button>
                <Link to="/resume">RESUME</Link>
              </button>
              <button>
                <Link to="/projects">PROJECTS</Link>
              </button>
            </div>
          ) : (
            ""
          )}

          <p>
            I am a Full Stack Developer with expertise in JavaScript, React,
            Node.js, and databases like MongoDB & PostgreSQL.
          </p>
          <p>
            Passionate about building scalable web applications and solving
            real-world problems through code.
          </p>
        </div>
      </div>
    </div>
  );
}
