import React from "react";
import { useTranslation } from "react-i18next";

const Education = ({ education }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="edu-bg" id="education">
      <div className="section-wrap">
        <div className="section-eyebrow">{t('education.eyebrow')}</div>
        <h2 className="section-heading">{t("nav.education")}</h2>
        {education.map((edu, index) => {
          const institution = edu.institution[currentLang] || edu.institution.en;
          const degree = edu.degree[currentLang] || edu.degree.en;
          const location = edu.location[currentLang] || edu.location.en;
          const duration = edu.duration[currentLang] || edu.duration.en;
          const major = edu.major[currentLang] || edu.major.en;
          const minor = edu.minor[currentLang] || edu.minor.en;
          const gpa = edu.gpa[currentLang] || edu.gpa.en;

          return (
            <div className="edu-card" key={index}>
              <img
                src={`${process.env.PUBLIC_URL}/${edu.logo}`}
                alt={institution}
                className="edu-logo"
              />
              <div>
                <div className="edu-title">{institution}</div>
                <div className="edu-degree">{degree}</div>
                <div className="edu-facts">
                  <span className="edu-fact">📍 {location}</span>
                  <span className="edu-fact">🗓 {duration}</span>
                  <span className="edu-fact">{t('education.major')}: {major}</span>
                  <span className="edu-fact">{t('education.minor')}: {minor}</span>
                </div>
                <div className="edu-gpa">{gpa}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
