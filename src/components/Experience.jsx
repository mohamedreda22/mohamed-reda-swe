import React, { useState, useEffect, useMemo } from "react";

const Timeline = ({ experiences: exps }) => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState([]);

  const filtered = useMemo(() => {
    return exps.filter((e) => {
      const matchF = filter === "all" || e.type.toLowerCase().includes(filter);
      const matchS =
        !search ||
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.company.toLowerCase().includes(search.toLowerCase()) ||
        (e.skills &&
          e.skills.some((s) => s.toLowerCase().includes(search.toLowerCase())));
      return matchF && matchS;
    });
  }, [exps, filter, search]);

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
    "all",
    "tech",
    "military",
    "career break",
    "freelance",
    "internship",
  ];

  return (
    <div>
      <div className="timeline-controls">
        <input
          className="timeline-search"
          type="text"
          placeholder="Search by skill, title or company…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-pills">
          {filterLabels.map((f) => (
            <button
              key={f}
              className={`pill${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="tl-list">
        {filtered.map((exp, i) => (
          <div
            key={i}
            className={`tl-entry${visible.includes(i) ? " visible" : ""}`}
          >
            <div
              className={`tl-dot ${exp.type.toLowerCase().replace(" ", "-")}`}
            />
            <div className="tl-card">
              <div className="tl-head">
                <span className="tl-title">{exp.title}</span>
                <span className="tl-dur">{exp.duration}</span>
              </div>
              <div className="tl-company">{exp.company}</div>
              {exp.desc && <p className="tl-desc">{exp.desc}</p>}
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
        ))}
      </div>
    </div>
  );
};

const Experience = ({ experiences }) => (
  <div className="exp-bg" id="experience">
    <div className="section-wrap">
      <div className="section-eyebrow">Career</div>
      <h2 className="section-heading">Experience & Journey</h2>
      <Timeline experiences={experiences} />
    </div>
  </div>
);

export default Experience;
