import Linkdin from "./linkedin.png";
import Facebook from "./facebook.png";
import WhatsApp from "./whatsapp.png";
import Github from "./github-sign.png";
import Gmail from "./envelope.png";

import Swal from "sweetalert2";

import "./Footer.css";
import { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMassageChange = (e) => {
    setMassage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!name, !email, !massage, !email.toLowerCase().includes("@"))) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        // footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      Swal.fire({
        toast: true,
        position: "center",
        icon: "success",
        title: "Your message has been sent!",
        showConfirmButton: false,
        timer: 2000,
      });
    }

    // Swal.fire({
    //   title: "Confirm to send your massage!",
    //   showDenyButton: false,
    //   showCancelButton: false,
    //   confirmButtonText: "Send",
    // }).then((result) => {
    //   /* Read more about isConfirmed, isDenied below */
    //   if (result.isConfirmed) {
    //     Swal.fire("Your message has been sent!", "", "success");
    //   } else if (result.isDenied) {
    //     Swal.fire("Your message did not send!", "", "info");
    //   }
    // });

    // Swal.fire({
    //   title: "Success!",
    //   text: "Your message was sended successfully.",
    //   icon: "success",
    //   confirmButtonText: "OK",
    // });

    setName("");
    setEmail("");
    setMassage("");
  };
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
            <a className="anker-link" href="">
              <img
                className="social-icon"
                alt="facebook icon"
                src={Facebook}
              ></img>
            </a>
            <a
              className="anker-link"
              href="https://wa.me/+905523911957"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icon"
                alt="whatsapp icon"
                src={WhatsApp}
              ></img>
            </a>
            <a className="anker-link" href="mailto:gholam2015m@gmail.com">
              <img className="social-icon" alt="envelop icon" src={Gmail}></img>
              <p>gholam2015m@gmail.com</p>
            </a>
          </div>
        </div>
        <form>
          <input
            type="text"
            placeholder="John"
            value={name}
            onChange={handleNameChange}
          ></input>
          <input
            type="email"
            placeholder="yourMail@gmail.com"
            value={email}
            onChange={handleEmailChange}
          ></input>
          <textarea
            type="text"
            placeholder="Your message.."
            value={massage}
            onChange={handleMassageChange}
          ></textarea>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
}
