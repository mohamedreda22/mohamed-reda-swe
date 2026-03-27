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
        <div className="section-eyebrow">About Me</div>
        <h2 className="section-heading">Who I Am</h2>
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
            I'm a Software Engineer specializing in Front-End and Full-Stack Web
            Development. My journey is unique: I merge the precision and
            discipline of my service in the <strong>Egyptian Border Guard</strong> with a
            deep-seated passion for modern JavaScript ecosystems.
          </p>

          <p>
            Whether leading a graduation project or serving on the border, I
            bring the same level of commitment, resilience, and attention to
            detail. I've developed real-world applications using the MERN and
            MEAN stacks, always with a focus on clean architecture and scalable
            solutions.
          </p>

          <p>
            I don't just write code; I build robust systems that solve problems.
            I'm currently maintaining my sharp technical edge while completing
            my military service, and I'm ready to deploy my skills to a
            world-class engineering team starting March 2026.
          </p>
        </motion.div>
        <div className="about-cards">
          {[
            {
              icon: "🪖",
              title: "Disciplined",
              desc: "Military-grade focus and resilience in every project",
            },
            {
              icon: "🏗️",
              title: "Full-Stack",
              desc: "MERN & MEAN stack with REST APIs and databases",
            },
            {
              icon: "🎯",
              title: "Detail-Oriented",
              desc: "Clean code, performance, and great UX",
            },
            {
              icon: "🤝",
              title: "Proven Leader",
              desc: "Led graduation project and coordinated battalion tasks",
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
