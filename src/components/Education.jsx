import React from "react";
import { motion } from "framer-motion";

const Education = ({ education }) => (
  <div className="edu-bg" id="education">
    <div className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-eyebrow">Background</div>
        <h2 className="section-heading">Education</h2>
      </motion.div>
      {education.map((edu, index) => (
        <motion.div 
          className="edu-card" 
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/${edu.logo}`}
            alt={edu.institution}
            className="edu-logo"
          />
          <div>
            <div className="edu-title">{edu.institution}</div>
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-facts">
              <span className="edu-fact">{edu.location}</span>
              <span className="edu-fact">{edu.duration}</span>
              <span className="edu-fact">Major: {edu.major}</span>
              <span className="edu-fact">Minor: {edu.minor}</span>
            </div>
            <div className="edu-gpa">{edu.gpa}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Education;
