import React from "react";

const Contact = ({ handleSubmit }) => (
  <div className="contact-bg" id="contact">
    <div className="section-wrap">
      <div className="section-eyebrow">Get in Touch</div>
      <h2 className="section-heading">Let's Talk</h2>
      <div className="contact-grid">
        <div className="contact-left">
          <p>
            I'm actively seeking full-time software engineering roles.
            <br />
            Whether you have an opportunity, a project idea, or just want to
            connect, my inbox is always open.
          </p>
          <div className="contact-links">
            <a href="mailto:mohamedreda.dev@gmail.com" className="contact-item">
              <div className="contact-icon">✉️</div>
              mohamedreda.dev@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/swe-mohamed-reda/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">💼</div>
              linkedin.com/in/swe-mohamed-reda
            </a>
            <a
              href="https://github.com/mohamedreda22"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">🐙</div>
              github.com/mohamedreda22
            </a>
            <a
              href="https://wa.me/201013201998"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">📱</div>
              WhatsApp: +20 101 320 1998
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button
            type="submit"
            className="btn-primary"
            style={{ alignSelf: "flex-start" }}
          >
            Send Message →
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
