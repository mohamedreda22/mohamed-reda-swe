import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <div className="about-bg" id="about">
    <div className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-eyebrow">The Narrative</div>
        <h2 className="section-heading">High-Performance Engineering</h2>
      </motion.div>
      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I am a Software Engineer who treats code like a mission-critical operation. My background is defined by a unique intersection: the tactical precision of the <strong>Egyptian Border Guard</strong> and the architectural depth of modern full-stack engineering.
          </p>

          <p>
            Having completed my military service in <strong>March 2026</strong>, I have transitioned back into full-time engineering with a renewed focus on building systems that don't just work—they scale. I specialize in the <strong>MERN</strong> and <strong>MEAN</strong> stacks, with a particular emphasis on <strong>React 19</strong>, <strong>Node.js</strong>, and distributed system design.
          </p>

          <p>
            My approach to software is holistic. I don't just 'write features'; I architect solutions. Whether it's solving the 'photo-loss' problem for thousands of event guests with <strong>YouMak</strong> or bridging the educational gap with <strong>Modarsak</strong>, my goal is always to deliver viral impact through technical excellence.
          </p>

          <p>
            Currently, I am operating as a <strong>Freelance Full-Stack Engineer</strong>, helping startups and established businesses deploy high-performance web applications while I look for my next high-stakes engineering challenge.
          </p>
        </motion.div>
        <div className="about-cards">
          {[
            {
              icon: "🛡️",
              title: "Operational Precision",
              desc: "Military-grade resilience applied to system uptime and bug-free deployments",
            },
            {
              icon: "🏗️",
              title: "Product Architecture",
              desc: "Expertise in designing scalable MERN/MEAN ecosystems from the ground up",
            },
            {
              icon: "🚀",
              title: "Viral Engineering",
              desc: "Building for massive scale, performance, and user-centric viral growth",
            },
            {
              icon: "🧠",
              title: "Systems Thinker",
              desc: "Deep understanding of how frontend, backend, and infrastructure interact",
            },
          ].map((c, index) => (
            <motion.div
              className="about-card"
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <div className="about-card-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
