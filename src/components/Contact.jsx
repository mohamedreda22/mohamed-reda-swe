import React from "react";
import { motion } from "framer-motion";

const Contact = ({ handleSubmit }) => (
  <div className="contact-bg" id="contact">
    <div className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-eyebrow">Get in Touch</div>
        <h2 className="section-heading">{"Let's Work Together"}</h2>
      </motion.div>
      <div className="contact-grid">
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            {"I'm actively seeking full-time software engineering opportunities."}
            <br />
            {"Whether you have a role, a project idea, or just want to connect, my inbox is always open."}
          </p>
          <div className="contact-links">
            <motion.a 
              href="mailto:mohamedreda.dev@gmail.com" 
              className="contact-item"
              whileHover={{ x: 8 }}
            >
              <div className="contact-icon">@</div>
              mohamedreda.dev@gmail.com
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/swe-mohamed-reda/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
              whileHover={{ x: 8 }}
            >
              <div className="contact-icon">in</div>
              linkedin.com/in/swe-mohamed-reda
            </motion.a>
            <motion.a
              href="https://github.com/mohamedreda22"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
              whileHover={{ x: 8 }}
            >
              <div className="contact-icon">&lt;/&gt;</div>
              github.com/mohamedreda22
            </motion.a>
            <motion.a
              href="https://wa.me/201013201998"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
              whileHover={{ x: 8 }}
            >
              <div className="contact-icon">+</div>
              +20 101 320 1998
            </motion.a>
          </div>
        </motion.div>
        <motion.form 
          className="contact-form" 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <motion.button
            type="submit"
            className="btn-primary"
            style={{ alignSelf: "flex-start" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  </div>
);

export default Contact;
