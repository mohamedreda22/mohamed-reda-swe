import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ skillGroups }) => (
  <div className="skills-bg" id="skills">
    <div className="section-wrap">
      <div className="section-eyebrow">Expertise</div>
      <h2 className="section-heading">Skills & Technologies</h2>
      {skillGroups.map((group) => (
        <div className="skill-group" key={group.label}>
          <div className="skill-group-title">{group.label}</div>
          <div className="skills-chips">
            {group.skills.map((skill) => (
              <div className="chip" key={skill.name}>
                <FontAwesomeIcon icon={skill.icon} className="chip-icon" />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
