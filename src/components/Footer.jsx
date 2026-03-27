import React from "react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer>
    <motion.div 
      className="footer-logo"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Mohamed<span>.</span>Reda
    </motion.div>
    <motion.div 
      className="footer-copy"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      Designed & Built by Mohamed Reda
    </motion.div>
    <motion.div 
      className="socials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.a
        href="https://github.com/mohamedreda22"
        target="_blank"
        rel="noreferrer"
        className="social-btn"
        aria-label="GitHub"
        whileHover={{ y: -4 }}
      >
        <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/swe-mohamed-reda/"
        target="_blank"
        rel="noreferrer"
        className="social-btn"
        aria-label="LinkedIn"
        whileHover={{ y: -4 }}
      >
        <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" />
      </motion.a>
      <motion.a
        href="mailto:mohamedreda.dev@gmail.com"
        className="social-btn"
        aria-label="Email"
        whileHover={{ y: -4 }}
      >
        <img src={`${process.env.PUBLIC_URL}/gmail.jpg`} alt="Email" />
      </motion.a>
      <motion.a
        href="https://wa.me/201013201998"
        target="_blank"
        rel="noreferrer"
        className="social-btn"
        aria-label="WhatsApp"
        whileHover={{ y: -4 }}
      >
        <img src={`${process.env.PUBLIC_URL}/whatsapp.png`} alt="WhatsApp" />
      </motion.a>
    </motion.div>
  </footer>
);

export default Footer;
