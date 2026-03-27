import React from "react";

const Footer = () => (
  <footer>
    <div className="footer-logo">
      Mohamed<span>.</span>Reda
    </div>
    <div className="footer-copy">
      © 2026 Mohamed Reda. All rights reserved.
    </div>
    <div className="socials">
      <a
        href="https://github.com/mohamedreda22"
        target="_blank"
        rel="noreferrer"
        className="social-btn"
        aria-label="GitHub"
      >
        <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/swe-mohamed-reda/"
        target="_blank"
        rel="noreferrer"
        className="social-btn"
        aria-label="LinkedIn"
      >
        <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" />
      </a>
      <a
        href="mailto:mohamedreda.dev@gmail.com"
        className="social-btn"
        aria-label="Email"
      >
        <img src={`${process.env.PUBLIC_URL}/gmail.jpg`} alt="Email" />
      </a>
      <a
        href="https://wa.me/201013201998"
        target="_blank"
        rel="noreferrer"
        className="social-btn"
        aria-label="WhatsApp"
      >
        <img src={`${process.env.PUBLIC_URL}/whatsapp.png`} alt="WhatsApp" />
      </a>
    </div>
  </footer>
);

export default Footer;
