import React from "react";
import { useTranslation } from "react-i18next";

const Certifications = ({ certifications }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="certs-bg" id="certifications">
      <div className="section-wrap">
        <div className="section-eyebrow">{t('certifications.eyebrow')}</div>
        <h2 className="section-heading">
          {t("nav.certifications")}
          <a
            href="https://drive.google.com/drive/folders/1AY5E9a4IXnIOR3lwJLI-uMeMGmSGdiwP?usp=drive_link"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗
          </a>
        </h2>
        <div className="certs-grid">
          {certifications.map((c) => {
            const title = c.title[currentLang] || c.title.en;
            const issuer = c.issuer[currentLang] || c.issuer.en;
            const date = c.date[currentLang] || c.date.en;
            const includes = c.includes[currentLang] || c.includes.en;

            return (
              <div className="cert-card" key={title}>
                <div className="cert-title">{title}</div>
                <div className="cert-meta">
                  <span>{issuer}</span> · {date}
                </div>
                <div className="cert-chips">
                  {c.skills.map((s) => (
                    <span className="cert-chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="cert-includes">
                  {includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
