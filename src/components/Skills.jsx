import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const Skills = ({ skillGroups }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="skills-bg" id="skills">
      <div className="section-wrap">
        <div className="section-eyebrow">{t("nav.skills")}</div>
        <h2 className="section-heading">{t("nav.skills")} & Technologies</h2>
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.label.en}>
            <div className="skill-group-title">
              {group.label[currentLang] || group.label.en}
            </div>
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
};

export default Skills;
