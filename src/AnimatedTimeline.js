import React, { useEffect, useState } from "react";
import "./AnimatedTimeline.css";

const AnimatedTimeline = ({ experiences }) => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleIndices, setVisibleIndices] = useState([]);

  const filteredExperiences = experiences.filter((exp) => {
    const matchesFilter =
      filter === "all" ? true : exp.type.toLowerCase().includes(filter);
    const matchesSearch =
      searchTerm === "" ||
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (exp.skills &&
        exp.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const elements = document.querySelectorAll(".timeline-item");
          const scrollTop = window.scrollY + window.innerHeight - 100;

          const newVisible = [];
          elements.forEach((el, idx) => {
            if (el.offsetTop < scrollTop) newVisible.push(idx);
          });
          setVisibleIndices(newVisible);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredExperiences]);

  return (
    <section className="animated-timeline" id="experience">
      <h1>Experience & Career Journey</h1>

      <div className="timeline-controls">
        <input
          type="text"
          placeholder="Search by skill, company or title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="timeline-filters">
          {[
            "all",
            "tech",
            "military",
            "career break",
            "freelance",
            "internship",
          ].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="timeline-container">
        {filteredExperiences.map((exp, index) => (
          <div
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            } ${exp.type.toLowerCase().replace(" ", "-")} ${
              visibleIndices.includes(index) ? "visible" : ""
            }`}
            key={index}
          >
            <div className="timeline-content">
              <h2 className="experience-title">{exp.title}</h2>
              <h3 className="experience-company">{exp.company}</h3>
              <p className="experience-duration">{exp.duration}</p>

              <div className="tooltip">
                <p>{exp.description}</p>
                {exp.skills && (
                  <div className="experience-skills">
                    {exp.skills.map((skill, i) => (
                      <span className="skill-badge" key={i}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedTimeline;
