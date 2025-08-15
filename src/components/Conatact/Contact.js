import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-continer">
      <div className="contact-them">
        <h3>Get in Touch</h3>
        <p>
          Have a question, idea, or project in mind? I’d love to hear from you.
          Whether you're ready to collaborate or just want to say hello, feel
          free to reach out using the form below. I’ll get back to you as soon
          as possible.
        </p>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="John"></input>
          <input type="email" placeholder="yourMail@gmail.com"></input>
          <textarea type="text" placeholder="Your message.."></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
