import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="hero-content">
        <div className="hero">
          <div className="profile-bio">
            <h3 className="bio-title">Full-Stack Software Developer</h3>
            <p className="bio">
              I'm a Full Stack Developer with 2+ years of experience building
              modern web applications. I specialize in creating fast, scalable,
              and user-friendly solutions using React, Node.js, Express, and
              MongoDB/PostgreSQL.
            </p>
            <div className="bio-btn">
              <a href="#contact">
                <button className="active-btn">Contect</button>
              </a>
              <button className="btn">Download CV</button>
            </div>
          </div>
          <div className="profile-img">
            <img alt="profile" src="/images/pro.png"></img>
          </div>
        </div>
        <div className="skills-continer">
          <div className="skills-box">
            <div className="icon-title">
              <img alt="ux/ui icon" src="/images/design.png"></img>
              <h3>Frontend</h3>
            </div>
            <ul className="skills-list">
              <li>HTML, CSS, JavaScript (ES6+ JS frameworks: React.js...)</li>
              <li>Responsive Design: Media queries, Flexbox, Grid</li>
              <li>State Management: Redux, Context API, etc.</li>
            </ul>
          </div>
          <div className="skills-box">
            <div className="icon-title">
              <img alt="back-end icon" src="/images/back-end.png"></img>
              <h3>Backend</h3>
            </div>
            <ul className="skills-list">
              <li>Server-side languages: Node.js (JavaScript), Python+</li>
              <li>
                Frameworks: Express.js (Node), Django (Python), Spring Boot
                (Java), etc.
              </li>
              <li>API Design: RESTful APIs, GraphQL</li>
            </ul>
          </div>
          <div className="skills-box">
            <div className="icon-title">
              <img alt="database icon" src="/images/database-storage.png"></img>
              <h3>Database</h3>
            </div>
            <ul className="skills-list">
              <li>SQL: PostgreSQL, MySQL, SQLite</li>
              <li>NoSQL: MongoDB, Firebase, Redis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
