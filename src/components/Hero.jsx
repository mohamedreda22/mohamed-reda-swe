import React from "react";
import { motion } from "framer-motion";

const Hero = ({ downloadCV }) => (
  <section className="hero" id="hero">
    <div className="hero-grid" />
    <div className="hero-glow" />
    <div className="hero-inner">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="hero-badge anim d1">
          <span className="badge-dot" />
          Soldier Who Codes 🪖
        </div>
        <h1 className="hero-name anim d2">
          Mohamed
          <br />
          <span className="accent">Reda</span>
        </h1>
        <p className="hero-role anim d3">
          Software Engineer & Full-Stack Developer
        </p>
        <p className="hero-bio anim d3">
          Building scalable web applications with React, Angular, and Node.js.
          Merging military discipline with engineering excellence to build the
          future of the web.
        </p>
        <div className="hero-mission anim d3" style={{ marginBottom: "32px" }}>
          <div
            style={{
              fontSize: "13px",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#00d4ff",
                boxShadow: "0 0 10px rgba(0, 212, 255, 0.45)",
              }}
            ></span>
            <strong>Current Mission:</strong> Egyptian Border Guard Duty
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "4px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 10px rgba(224, 23, 92, 0.45)",
              }}
            ></span>
            <strong>Next Mission:</strong> Your Engineering Team (Available March
            2026)
          </div>
        </div>
        <div className="hero-cta anim d4">
          <button className="btn-primary" onClick={downloadCV}>
            ⬇ Download CV
          </button>
          <a href="#projects" className="btn-ghost">
            View Projects →
          </a>
        </div>
        <div className="hero-stats anim d4">
          <div>
            <div className="stat-num">
              10<span>+</span>
            </div>
            <div className="stat-label">Projects</div>
          </div>
          <div>
            <div className="stat-num">
              5<span>+</span>
            </div>
            <div className="stat-label">Internships</div>
          </div>
          <div>
            <div className="stat-num">
              30<span>+</span>
            </div>
            <div className="stat-label">Skills</div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="photo-ring anim d2">
          <img
            src={`${process.env.PUBLIC_URL}/gp_photo.jpg`}
            alt="Mohamed Reda"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
