import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../components/Profile/Profile";
import SMLogo from "../components/SmLogo/SMLogo";
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

            <h1>⎯⎯⎯</h1>
            <h3>Full-stack Developer</h3>
            {windowWidth < 768 ? (
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
              <a>
                <SMLogo img="/images/youtub.png" />
              </a>

              <a href="https://x.com/reza19184310">
                <SMLogo img="/images/x.png" />
              </a>
              <a href="https://www.linkedin.com/in/reza-amiri-4362b8335/">
                <SMLogo img="/images/linkden.png" />
              </a>
              <a href="#">
                <SMLogo img="/images/insta.png" />
              </a>
              <a href="https://x.com/reza19184310">
                <SMLogo img="/images/wats.png" />
              </a>
            </div>
          </div>
        </div>

        <div className="profile-bio">
          <h1>About Reza</h1>

          {windowWidth > 768 ? (
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
          <div className="describtion">
            <p>
              I'm a Full-Stack Web Developer with a passion for building fast,
              scalable, and user-centric web applications.
            </p>
            <p>
              I specialize in both frontend and backend development, with a tech
              stack that includes React, Next.js, TypeScript, Node.js, Express,
              and MongoDB. I also work with PostgreSQL, Prisma, Tailwind CSS,
              and RESTful and GraphQL APIs, giving me the flexibility to create
              efficient solutions tailored to each project's unique needs.
            </p>
            <p>
              Whether I’m developing responsive UI components, integrating APIs,
              or designing robust backend systems, I bring a balanced focus on
              performance, maintainability, and clean code. I’ve built and
              maintained everything from SaaS platforms and dashboards to
              e-commerce sites and internal tools.
            </p>
            <p>
              I follow modern development practices—version control with Git,
              CI/CD pipelines, automated testing, and agile workflows—ensuring
              reliable and collaborative delivery. I’m always exploring new
              technologies and refining my skills to stay ahead of the curve in
              a rapidly evolving ecosystem.
            </p>
            <p>
              Let's <Link to="/contact">contect</Link> and create something
              impactful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
