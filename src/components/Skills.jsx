import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ skillGroups }) => (
  <div className="skills-bg" id="skills">
    <div className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-eyebrow">Expertise</div>
        <h2 className="section-heading">Skills & Technologies</h2>
      </motion.div>
      {skillGroups.map((group, groupIndex) => (
        <motion.div 
          className="skill-group" 
          key={group.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
        >
          <div className="skill-group-title">{group.label}</div>
          <div className="skills-chips">
            {group.skills.map((skill, skillIndex) => (
              <motion.div 
                className="chip" 
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: groupIndex * 0.1 + skillIndex * 0.03 
                }}
                whileHover={{ y: -2, scale: 1.02 }}
              >
                <FontAwesomeIcon icon={skill.icon} className="chip-icon" />
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Skills;
