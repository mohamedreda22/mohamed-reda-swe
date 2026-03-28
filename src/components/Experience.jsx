import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

const Timeline = ({ experiences: exps }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState([]);

  const filtered = useMemo(() => {
    return exps.filter((e) => {
      const title = e.title[currentLang] || e.title.en;
      const company = e.company[currentLang] || e.company.en;
      const skills = e.skills || [];

      const matchF = filter === "all" || e.type.toLowerCase().includes(filter);
      const matchS =
        !search ||
        title.toLowerCase().includes(search.toLowerCase()) ||
        company.toLowerCase().includes(search.toLowerCase()) ||
        skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
      return matchF && matchS;
    });
  }, [exps, filter, search, currentLang]);

  useEffect(() => {
    const handle = () => {
      const els = document.querySelectorAll(".tl-entry");
      const bottom = window.scrollY + window.innerHeight - 80;
      const vis = [];
      els.forEach((el, i) => {
        if (el.offsetTop < bottom) vis.push(i);
      });
      setVisible(vis);
    };

    window.addEventListener("scroll", handle, { passive: true });
    handle();

    return () => window.removeEventListener("scroll", handle);
  }, [filtered.length]);

  const filterLabels = [
    { key: "all", label: t('experience.all') },
    { key: "tech", label: t('experience.tech') },
    { key: "military", label: t('experience.military') },
    { key: "career break", label: t('experience.career_break') },
    { key: "freelance", label: t('experience.freelance') },
    { key: "internship", label: t('experience.internship') },
  ];

  return (
    <div>
      <div className="timeline-controls">
        <input
          className="timeline-search"
          type="text"
          placeholder={t('experience.search_placeholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-pills">
          {filterLabels.map((f) => (
            <button
              key={f.key}
              className={`pill${filter === f.key ? " active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="tl-list">
        {filtered.map((exp, i) => {
          const title = exp.title[currentLang] || exp.title.en;
          const company = exp.company[currentLang] || exp.company.en;
          const duration = exp.duration[currentLang] || exp.duration.en;
          const desc = exp.desc ? (exp.desc[currentLang] || exp.desc.en) : null;

          return (
            <div
              key={i}
              className={`tl-entry${visible.includes(i) ? " visible" : ""}`}
            >
              <div
                className={`tl-dot ${exp.type.toLowerCase().replace(" ", "-")}`}
              />
              <div className="tl-card">
                <div className="tl-head">
                  <span className="tl-title">{title}</span>
                  <span className="tl-dur">{duration}</span>
                </div>
                <div className="tl-company">{company}</div>
                {desc && <p className="tl-desc">{desc}</p>}
                {exp.skills && (
                  <div className="tl-skills">
                    {exp.skills.map((s, j) => (
                      <span className="skill-badge" key={j}>
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Experience = ({ experiences }) => {
  const { t } = useTranslation();
  return (
    <div className="exp-bg" id="experience">
      <div className="section-wrap">
        <div className="section-eyebrow">{t('experience.eyebrow')}</div>
        <h2 className="section-heading">{t('experience.heading')}</h2>
        <Timeline experiences={experiences} />
      </div>
    </div>
  );
};

export default Experience;
