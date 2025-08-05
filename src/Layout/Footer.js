import Linkdin from "./linkedin.png";
import Facebook from "./facebook.png";
import WhatsApp from "./whatsapp.png";
import Github from "./github-sign.png";
import Gmail from "./envelope.png";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-continer">
      <div className="footer-form">
        <div className="contact-them">
          <h3>Get in Touch</h3>
          <p>
            Have a question, idea, or project in mind? I’d love to hear from
            you. Whether you're ready to collaborate or just want to say hello,
            feel free to reach out using the form below. I’ll get back to you as
            soon as possible.
          </p>
          <div className="social-m-box">
            <a
              className="anker-link"
              href="https://www.linkedin.com/in/reza-amiri-4362b8335/"
            >
              <img
                className="social-icon"
                alt="linkdin icon"
                src={Linkdin}
              ></img>
            </a>
            <a className="anker-link" href="https://github.com/Reza-amiri10">
              <img className="social-icon" alt="github icon" src={Github}></img>
            </a>
            <a
              className="anker-link"
              href="https://www.linkedin.com/in/reza-amiri-4362b8335/"
            >
              <img
                className="social-icon"
                alt="facebook icon"
                src={Facebook}
              ></img>
            </a>
            <a
              className="anker-link"
              href="https://www.linkedin.com/in/reza-amiri-4362b8335/"
            >
              <img
                className="social-icon"
                alt="whatsapp icon"
                src={WhatsApp}
              ></img>
            </a>
            <a
              className="anker-link"
              href="https://www.linkedin.com/in/reza-amiri-4362b8335/"
            >
              <img className="social-icon" alt="envelop icon" src={Gmail}></img>
              <p>gholam2015m@gmail.com</p>
            </a>
          </div>
        </div>
        <form>
          <input type="text" placeholder="John"></input>
          <input type="email" placeholder="yourMail@gmail.com"></input>
          <textarea type="text" placeholder="Your message.."></textarea>
          <button type="submit" onClick={(e) => e.preventDefault()}>
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
}
