import React from "react";
import { motion } from "framer-motion";

const Hero = ({ downloadCV }) => (
  <section className="hero" id="hero">
    <div className="hero-grid" />
    <div className="hero-glow" />
    <div className="hero-inner">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div 
          className="hero-badge anim d1"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="badge-dot" />
          Available for Opportunities
        </motion.div>
        <h1 className="hero-name anim d2">
          Mohamed
          <br />
          <span className="accent">Reda</span>
        </h1>
        <p className="hero-role anim d3">
          Full-Stack Software Engineer & Product Architect
        </p>
        <p className="hero-bio anim d3">
          I build scalable, high-performance web applications with a focus on 
          clean architecture and exceptional user experiences. Bringing military 
          discipline and engineering excellence to every project.
        </p>
        <div className="hero-mission anim d3" style={{ marginBottom: "32px" }}>
          <div
            style={{
              fontSize: "13px",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 12px var(--accent)",
              }}
            />
            <strong style={{ color: "var(--text-primary)" }}>Status:</strong> Service Completed (Mar 2026)
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "8px",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--accent-secondary)",
                boxShadow: "0 0 12px rgba(255, 209, 102, 0.5)",
              }}
            />
            <strong style={{ color: "var(--text-primary)" }}>Mission:</strong> Scaling Global Products
          </div>
        </div>
        <div className="hero-cta anim d4">
          <motion.button 
            className="btn-primary" 
            onClick={downloadCV}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Download Resume
          </motion.button>
          <motion.a 
            href="#projects" 
            className="btn-ghost"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
        </div>
        <div className="hero-stats anim d4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="stat-num">
              12<span>+</span>
            </div>
            <div className="stat-label">Projects Shipped</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="stat-num">
              6<span>+</span>
            </div>
            <div className="stat-label">Companies</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="stat-num">
              100<span>%</span>
            </div>
            <div className="stat-label">Commitment</div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div 
          className="photo-ring anim d2"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/gp_photo.jpg`}
            alt="Mohamed Reda - Software Engineer"
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
