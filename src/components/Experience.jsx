import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

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

  const handleScroll = useCallback(() => {
    const els = document.querySelectorAll(".tl-entry");
    const bottom = window.scrollY + window.innerHeight - 100;
    const vis = [];
    els.forEach((el, i) => {
      if (el.offsetTop < bottom) vis.push(i);
    });
    setVisible(vis);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filtered.length, handleScroll]);

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
      <motion.div 
        className="timeline-controls"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <input
          className="timeline-search"
          type="text"
          placeholder="Search by skill, title, or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-pills">
          {filterLabels.map((f) => (
            <motion.button
              key={f}
              className={`pill${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </motion.button>
          ))}
        </div>
      </motion.div>

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
        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              textAlign: "center", 
              color: "var(--text-muted)",
              padding: "40px 0",
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
            }}
          >
            No experiences match your search criteria.
          </motion.p>
        )}
      </div>
    </div>
  );
};

const Experience = ({ experiences }) => (
  <div className="exp-bg" id="experience">
    <div className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-eyebrow">Career</div>
        <h2 className="section-heading">Experience & Journey</h2>
      </motion.div>
      <Timeline experiences={experiences} />
    </div>
  </div>
);

export default Experience;
