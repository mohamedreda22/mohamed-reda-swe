import React from "react";
import { motion } from "framer-motion";

const Certifications = ({ certifications }) => (
  <div className="certs-bg" id="certifications">
    <div className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-eyebrow">Learning</div>
        <h2 className="section-heading">
          Certifications
          <motion.a
            href="https://drive.google.com/drive/folders/1AY5E9a4IXnIOR3lwJLI-uMeMGmSGdiwP?usp=drive_link"
            style={{ 
              textDecoration: "none",
              marginLeft: "16px",
              fontSize: "0.75em",
              color: "var(--accent)",
              fontFamily: "var(--font-mono)",
              fontWeight: 500,
            }}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
          >
            View All
          </motion.a>
        </h2>
      </motion.div>
      <div className="certs-grid">
        {certifications.map((c, index) => (
          <motion.div 
            className="cert-card" 
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="cert-title">{c.title}</div>
            <div className="cert-meta">
              <span>{c.issuer}</span> &middot; {c.date}
            </div>
            <div className="cert-chips">
              {c.skills.map((s) => (
                <span className="cert-chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
            <ul className="cert-includes">
              {c.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Certifications;
